(() => {
  const { t } = window.CAM_I18N;
  let problems = [];
  let openProblems = [];
  let namedConjectures = [];
  const details = new Map();
  const state = { collection: "open", query: "", group: "clarity", filter: "all", sortAsc: true, selected: null };
  const clarityOrder = { L4: 0, L3: 1, L2: 2, L1: 3 };
  const concisenessOrder = { short: 0, medium: 1, long: 2 };
  const familiarityOrder = { high: 0, medium: 1, low: 2 };
  const levelNames = { L4: "L4 精确定式", L3: "L3 清晰可研究", L2: "L2 方向明确", L1: "L1 探索性议题" };
  const groupLabels = {
    conciseness: { short: "简洁", medium: "适中", long: "复杂" },
    familiarity: { high: "高文献可见度", medium: "中文献可见度", low: "低文献可见度" },
  };
  const namedGroupLabels = { domain: "研究领域", status: "状态" };
  const $ = (id) => document.getElementById(id);

  function escapeHtml(value) { return String(value || "").replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
  function protectMath(value) {
    const math = [];
    const text = String(value || "").replace(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)|\$[^$\n]+\$)/g, (match) => {
      math.push(match);
      return `@@MATH${math.length - 1}@@`;
    });
    return { text, math };
  }
  function renderFormula(value, displayMode) {
    const source = String(value || "");
    const body = source.replace(/^\$\$|\$\$$/g, "").replace(/^\\\[|\\\]$/g, "").replace(/^\\\(|\\\)$/g, "").replace(/^\$|\$$/g, "");
    if (window.katex && typeof window.katex.renderToString === "function") {
      try {
        return window.katex.renderToString(body, { displayMode, throwOnError: false, strict: "ignore" });
      } catch (error) {
        console.warn("KaTeX rendering failed", error);
      }
    }
    return escapeHtml(t(source));
  }
  function restoreMath(value, math) {
    return value.replace(/@@MATH(\d+)@@/g, (_, index) => `<span class="math-inline">${renderFormula(math[Number(index)], false)}</span>`);
  }
  function inlineMarkdown(value) {
    const protectedValue = protectMath(value);
    let s = escapeHtml(protectedValue.text);
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*\*/g, "<em>$1</em>").replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2" target="_blank" rel="noreferrer">$1</a>`);
    return restoreMath(s, protectedValue.math);
  }
  function markdown(value) {
    const lines = value.split(/\r?\n/), out = []; let list = null; let mathBlock = null; let headingIndex = 0;
    const closeList = () => { if (list) { out.push(`</${list}>`); list = null; } };
    const closeMath = () => { if (mathBlock) { out.push(`<div class="math-block">${renderFormula(mathBlock.join("\n"), true)}</div>`); mathBlock = null; } };
    lines.forEach((line) => {
      const trimmed = line.trim();
      if (mathBlock) {
        mathBlock.push(line);
        if (trimmed === "$$" || trimmed === "\\]") closeMath();
        return;
      }
      if (trimmed === "$$" || trimmed === "\\[") { closeList(); mathBlock = [trimmed]; return; }
      if (/^\s*\$\$.+\$\$\s*$/.test(line) || /^\s*\\\[[\s\S]*\\\]\s*$/.test(line)) {
        closeList(); out.push(`<div class="math-block">${renderFormula(trimmed, true)}</div>`); return;
      }
      if (/^\s*[-*]\s+/.test(line)) { if (list !== "ul") { closeList(); out.push("<ul>"); list = "ul"; } out.push(`<li>${inlineMarkdown(line.replace(/^\s*[-*]\s+/, ""))}</li>`); return; }
      if (/^\s*\d+[.)]\s+/.test(line)) { if (list !== "ol") { closeList(); out.push("<ol>"); list = "ol"; } out.push(`<li>${inlineMarkdown(line.replace(/^\s*\d+[.)]\s+/, ""))}</li>`); return; }
      closeList();
      if (!line.trim()) return;
      if (/^---+$/.test(line.trim())) { out.push("<hr>"); return; }
      const heading = line.match(/^(#{1,4})\s+(.+)$/); if (heading) { const level = heading[1].length; const id = `detail-heading-${headingIndex++}`; out.push(`<h${level} id="${id}">${inlineMarkdown(heading[2])}</h${level}>`); return; }
      if (/^>\s?/.test(line)) { out.push(`<blockquote>${inlineMarkdown(line.replace(/^>\s?/, ""))}</blockquote>`); return; }
      out.push(`<p>${inlineMarkdown(line)}</p>`);
    }); closeList(); closeMath(); return out.join("");
  }
  function typesetMath(root) {
    return root;
  }
  function matches(p) {
    const q = state.query.trim().toLowerCase();
    const hay = `${p.title} ${p.nameEn || ""} ${p.part} ${t(p.part)} ${p.authors} ${p.source} ${p.keywords} ${p.statement}`.toLowerCase();
    if (q && !hay.includes(q)) return false;
    if (state.filter === "all") return true;
    if (state.group === "clarity") return p.clarity.level === state.filter;
    return p[state.group] === state.filter;
  }
  function groupValue(p) { return state.group === "clarity" ? p.clarity.level : p[state.group]; }
  function detailError(message) {
    return `<div class="detail-placeholder"><div class="placeholder-mark">!</div><h2>${escapeHtml(t("详情加载失败"))}</h2><p>${escapeHtml(t(message))}</p></div>`;
  }
  function problemJsonUrl(jsonFile) {
    return new URL(jsonFile, new URL("../", document.baseURI)).href;
  }
  function normalizeConjecture(item) {
    return {
      ...item,
      kind: "conjecture",
      part: item.domain,
      partKey: item.domainKey,
      authors: "",
      source: item.sources?.[0]?.label || "",
      tags: item.tags || [],
      sources: item.sources || [],
      keywords: (item.tags || []).join(" "),
      verification: item.status,
      type: "named-conjecture",
      typeLabel: "命名猜想 / 著名问题",
      typeTags: item.tags,
      clarity: { level: "", label: "命名猜想", score: null, description: item.relevance, reasons: [] },
      statement: item.statement,
      summary: item.summary,
      concisenessLabel: "",
      familiarityLabel: "",
      content: `${item.name}\n\n${item.statement}\n\n${item.relevance}`,
    };
  }
  function configureGroups(reset = true) {
    const select = $("groupBy");
    if (state.collection === "named") {
      select.innerHTML = `<option value="domain">${escapeHtml(t("研究领域"))}</option><option value="status">${escapeHtml(t("状态"))}</option>`;
      if (reset) state.group = "domain";
    } else {
      select.innerHTML = `<option value="clarity">${escapeHtml(t("明确度"))}</option><option value="part">${escapeHtml(t("研究领域"))}</option><option value="typeLabel">${escapeHtml(t("问题类型"))}</option><option value="verification">${escapeHtml(t("来源状态"))}</option><option value="conciseness">${escapeHtml(t("statement 简洁程度"))}</option><option value="familiarity">${escapeHtml(t("statement 知名度（文献代理）"))}</option>`;
      if (reset) state.group = "clarity";
    }
    select.value = state.group;
  }
  function setCollection(collection) {
    state.collection = collection;
    problems = collection === "named" ? namedConjectures : openProblems;
    state.query = "";
    state.filter = "all";
    state.selected = null;
    $("search").value = "";
    configureGroups();
    render();
    $("resultCount").textContent = problems.length;
    updateSortLabel();
    $("collectionSelect").value = collection;
    $("detailPane").innerHTML = `<div class="detail-placeholder"><div class="placeholder-mark">↗</div><h2>${escapeHtml(t("选择一个问题"))}</h2><p>${escapeHtml(t("详情会显示在这里"))}</p></div>`;
  }
  function renderFilters() {
    const values = state.group === "clarity" ? ["L4","L3","L2","L1"] : state.group === "conciseness" ? ["short", "medium", "long"] : state.group === "familiarity" ? ["high", "medium", "low"] : [...new Set(problems.map(groupValue))].sort((a,b)=>String(a).localeCompare(String(b),"zh"));
    const labels = state.group === "clarity" ? levelNames : state.collection === "named" ? namedGroupLabels : groupLabels[state.group] || {};
    $("filters").innerHTML = `<button class="chip ${state.filter === "all" ? "active" : ""}" data-filter="all">${escapeHtml(t("全部"))}</button>` + values.map(v => `<button class="chip ${state.filter === v ? "active" : ""}" data-filter="${escapeHtml(v)}">${escapeHtml(t(labels[v] || v))}</button>`).join("");
    $("filters").querySelectorAll(".chip").forEach((button) => button.addEventListener("click", () => { state.filter = button.dataset.filter; render(); }));
  }
  function renderResults() {
    const list = problems.filter(matches).sort((a,b) => { const order = state.group === "clarity" ? clarityOrder : state.group === "conciseness" ? concisenessOrder : state.group === "familiarity" ? familiarityOrder : null; const av = order ? order[groupValue(a)] : String(groupValue(a)); const bv = order ? order[groupValue(b)] : String(groupValue(b)); const cmp = typeof av === "number" ? av-bv : av.localeCompare(bv,"zh"); const tie = state.collection === "named" ? String(a.name).localeCompare(String(b.name),"zh") : Number(a.id)-Number(b.id); return (cmp || tie) * (state.sortAsc ? 1 : -1); });
    $("resultCount").textContent = list.length; $("empty").hidden = list.length > 0;
    $("results").innerHTML = list.map((p) => p.kind === "conjecture" ? `<article class="problem-card conjecture-card ${state.selected === p.id ? "selected" : ""}" data-id="${escapeHtml(p.id)}" tabindex="0"><div class="card-meta"><span class="card-id">${escapeHtml(t("命名猜想"))}</span><span class="pill conjecture-status">${escapeHtml(t(p.status))}</span><span class="pill">${escapeHtml(t(p.domain))}</span></div><h3 class="card-title">${escapeHtml(window.CAM_I18N.language === "en" ? p.nameEn : p.name)} <small>${escapeHtml(window.CAM_I18N.language === "en" ? p.name : p.nameEn)}</small></h3><p class="card-summary">${inlineMarkdown(p.statement)}</p><div class="card-foot"><span>${escapeHtml(p.summary)}</span></div></article>` : `<article class="problem-card ${state.selected === p.id ? "selected" : ""}" data-id="${p.id}" tabindex="0"><div class="card-meta"><span class="card-id">#${String(p.id).padStart(3,"0")}</span><span class="pill ${p.clarity.level.toLowerCase()}">${p.clarity.level} · ${escapeHtml(t(p.clarity.label))}</span><span class="pill">${escapeHtml(t(p.part))}</span></div><h3 class="card-title">${escapeHtml(p.title)}</h3><p class="card-summary">${inlineMarkdown(p.statement || p.summary)}</p><div class="card-foot"><span>${escapeHtml(t(p.typeLabel))} · ${escapeHtml(t(p.concisenessLabel))} · ${escapeHtml(t(p.familiarityLabel))}</span><span class="score">${escapeHtml(t("明确度"))} ${p.clarity.score}/100</span></div></article>`).join("");
    typesetMath($("results"));
    $("results").querySelectorAll(".problem-card").forEach((card) => { card.addEventListener("click", () => select(state.collection === "named" ? card.dataset.id : Number(card.dataset.id))); card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(state.collection === "named" ? card.dataset.id : Number(card.dataset.id)); } }); });
  }
  async function select(id) {
    state.selected = id;
    const summary = problems.find((problem) => problem.id === id);
    if (!summary) return;
    history.replaceState(null, "", summary.kind === "conjecture" ? `#conjecture-${id}` : `#problem-${id}`);
    renderResults();
    if (window.innerWidth < 1100) $("detailPane").scrollIntoView({behavior:"smooth",block:"start"});
    try {
      if (summary.kind === "conjecture") { renderConjectureDetail(summary); return; }
      const cached = details.get(id);
      if (cached) { renderDetail(cached); return; }
      $("detailPane").innerHTML = `<div class="detail-placeholder"><div class="placeholder-mark">…</div><h2>${escapeHtml(t("正在加载问题"))}</h2><p>${escapeHtml(t("正在读取该题的 JSON 文件"))}</p></div>`;
      const response = await fetch(problemJsonUrl(summary.jsonFile), { cache: "no-cache" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const detail = await response.json();
      details.set(id, detail);
      if (state.selected === id) renderDetail(detail);
    } catch (error) {
      console.error("Unable to load problem JSON", error);
      if (state.selected === id) {
        const hint = error instanceof TypeError
          ? t("请通过本地 HTTP 服务打开网页，并从 CAM-Bench-OpenProblem 根目录启动服务。")
          : `${t("请求题目 JSON 失败：")}${error.message}`;
        $("detailPane").innerHTML = detailError(hint);
      }
    }
  }
  function renderConjectureDetail(p) {
    const sources = Array.isArray(p.sources) ? p.sources : [];
    const tags = Array.isArray(p.tags) ? p.tags : [];
    const sourceLinks = sources.map((source) => source && source.url
      ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label || source.url)} ↗</a>`
      : `<span>${escapeHtml(t(source?.label || "未列出"))}</span>`).join("<br>");
    const statement = p.statement || p.summary || t("暂无猜想陈述");
    const summary = p.summary && p.summary !== statement ? `<div class="detail-section"><h3>${escapeHtml(t("问题摘要"))}</h3><p>${inlineMarkdown(p.summary)}</p></div>` : "";
    const relevance = p.relevance ? `<div class="detail-section"><h3>${escapeHtml(t("与本库的关联"))}</h3><p>${inlineMarkdown(p.relevance)}</p></div>` : "";
    const tagMarkup = tags.map((tag) => `<span class="reason">${escapeHtml(tag)}</span>`).join("") || `<span class="detail-muted">${escapeHtml(t("未列出"))}</span>`;
    $("detailPane").innerHTML = `<div class="detail conjecture-detail"><div class="detail-head"><div class="detail-kicker"><span>${escapeHtml(t("命名猜想"))}</span><span>·</span><span>${escapeHtml(t(p.domain || "未分类"))}</span><span class="pill conjecture-status">${escapeHtml(t(p.status || "未标注"))}</span></div><h2>${escapeHtml((window.CAM_I18N.language === "en" ? p.nameEn : p.name) || t("未命名猜想"))}</h2></div><div class="detail-body"><p class="language-note">${escapeHtml(t("内容按原文展示；语言切换仅改变界面与分类标签。"))}</p><div class="detail-section named-statement"><h3>${escapeHtml(t("猜想陈述"))}</h3><p>${inlineMarkdown(statement)}</p></div>${summary}${relevance}<div class="detail-section"><h3>${escapeHtml(t("关键词"))}</h3><div class="reason-list">${tagMarkup}</div></div><div class="detail-section detail-source"><strong>${escapeHtml(t("来源："))}</strong><br>${sourceLinks || `<span>${escapeHtml(t("未列出"))}</span>`}</div></div></div>`;
  }
  function clarityBreakdown(p) {
    const limits = {"问题陈述":25,"对象与假设":20,"目标与判据":25,"范围与边界":15,"单一性":15};
    const rows = Object.entries(p.clarity.components || {}).map(([label,score]) => `<tr><th scope="row">${escapeHtml(t(label))}</th><td>${score}/${limits[label]}</td></tr>`).join("");
    const extra = (p.clarity.reasons || []).slice(5).map(reason => {
      const match = reason.match(/检测到 (\d+) 个子问题/);
      return `<li>${escapeHtml(window.CAM_I18N.language === "en" && match ? `${match[1]} subquestions detected; multi-goal penalty applied.` : t(reason))}</li>`;
    }).join("");
    return `<section class="clarity-box"><div class="clarity-top"><h3>${escapeHtml(t("明确度评分依据"))}</h3><strong>${p.clarity.level} · ${p.clarity.score}/100</strong></div><p class="clarity-desc">${escapeHtml(t("文本启发式评分；不代表正确性、难度或是否仍未解决。"))}</p><table class="clarity-components">${rows}</table>${extra ? `<ul class="clarity-desc">${extra}</ul>` : ""}<p class="clarity-desc">${escapeHtml(t("规则主要匹配英文关键词；只读取匹配的问题标题到下一个标题之间的文本。"))}</p></section>`;
  }
  function updateSortLabel() {
    $("sortButton").innerHTML = `${escapeHtml(t(state.sortAsc ? (state.collection === "named" ? "按名称排序" : "按编号排序") : "倒序浏览"))} <span>↕</span>`;
  }
  function applyLanguage() {
    document.documentElement.lang = window.CAM_I18N.language === "en" ? "en" : "zh-CN";
    document.title = t("CAM-Bench · 开放问题图谱");
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    $("languageSelect").value = window.CAM_I18N.language;
    $("search").placeholder = t("标题、关键词、作者…");
    document.querySelector(".workspace").setAttribute("aria-label", t("问题浏览器"));
    $("detailPane").setAttribute("aria-label",t("问题详情"));
    $("collectionSelect").options[0].textContent = window.CAM_I18N.language === "en" ? "Open problems (162)" : "开放问题库（162）";
    $("collectionSelect").options[1].textContent = window.CAM_I18N.language === "en" ? "Named conjectures (22)" : "命名猜想（22）";
    document.querySelector(".method-link").href = window.CAM_I18N.language === "en" ? "classification_methodology.en.md" : "classification_methodology.md";
    configureGroups(false);
    updateSortLabel();
    render();
    if (state.selected !== null) {
      const p = problems.find(p => p.id === state.selected);
      if (p?.kind === "conjecture") renderConjectureDetail(p);
      else if (details.has(state.selected)) renderDetail(details.get(state.selected));
    } else {
      $("detailPane").innerHTML = `<div class="detail-placeholder"><div class="placeholder-mark">↗</div><h2>${escapeHtml(t("选择一个问题"))}</h2><p>${escapeHtml(t("详情会显示在这里"))}</p></div>`;
    }
  }
  function renderDetail(p) {
    const source = p.source || p.authors || "未在条目中单独列出";
    const metadata = [
      `<strong>${escapeHtml(t("问题类型："))}</strong>${escapeHtml(t(p.typeLabel || "未标注"))}`,
      `<strong>${escapeHtml(t("来源状态："))}</strong>${escapeHtml(t(p.verification || "未标注"))}`,
      `<strong>${escapeHtml(t("statement："))}</strong>${escapeHtml(t(p.concisenessLabel || "未标注"))}${t("（复杂度 ")}${escapeHtml(p.statementComplexityScore ?? "未标注")}/100${window.CAM_I18N.language === "en" ? ", " : "，"}${escapeHtml(p.statementLength ?? "未标注")}${t(" 字符）")}`,
      `<strong>${escapeHtml(t("文献可见度："))}</strong>${escapeHtml(t(p.familiarityLabel || "未标注"))}`,
      `<strong>${escapeHtml(t("来源："))}</strong>${escapeHtml(t(source))}`,
    ].join("<br>");
    $("detailPane").innerHTML = `<div class="detail"><div class="detail-head"><div class="detail-kicker"><span>#${String(p.id).padStart(3,"0")}</span><span>·</span><span>${escapeHtml(t(p.part))}</span></div><h2>${escapeHtml(p.title)}</h2></div><div class="detail-body">${clarityBreakdown(p)}<p class="language-note">${escapeHtml(t("内容按原文展示；语言切换仅改变界面与分类标签。"))}</p><div class="detail-section"><h3>${escapeHtml(t("问题摘要"))}</h3><p>${inlineMarkdown(p.statement || p.summary)}</p></div><div class="detail-section"><h3>${escapeHtml(t("原始条目"))}</h3><div class="markdown">${markdown(p.content)}</div></div><div class="detail-section detail-source"><div class="detail-metadata">${metadata}</div><strong>${escapeHtml(t("文件："))}</strong>${escapeHtml(p.file)}<br><strong>${escapeHtml(t("关键词："))}</strong>${escapeHtml(t(p.keywords || "未提供"))}</div></div></div>`;
    typesetMath($("detailPane"));
  }
  function render() { renderFilters(); renderResults(); }
  $("search").addEventListener("input", (e) => { state.query = e.target.value; renderResults(); });
  $("groupBy").addEventListener("change", (e) => { state.group = e.target.value; state.filter = "all"; render(); });
  $("sortButton").addEventListener("click", () => { state.sortAsc = !state.sortAsc; updateSortLabel(); renderResults(); });
  $("collectionSelect").addEventListener("change", (e) => setCollection(e.target.value));
  $("languageSelect").addEventListener("change", e => { window.CAM_I18N.setLanguage(e.target.value); applyLanguage(); });
  async function start() {
    try {
      const [catalogResponse, namedResponse] = await Promise.all([
        fetch("catalog.json", { cache: "no-cache" }),
        fetch("named_conjectures.json", { cache: "no-cache" }),
      ]);
      if (!catalogResponse.ok || !namedResponse.ok) throw new Error("catalog or named conjectures request failed");
      openProblems = await catalogResponse.json();
      namedConjectures = (await namedResponse.json()).map(normalizeConjecture);
      problems = openProblems;
      applyLanguage();
      const conjectureHash = location.hash.match(/^#conjecture-(.+)$/);
      if (conjectureHash) {
        setCollection("named");
        select(conjectureHash[1]);
      } else {
        render();
        const problemHash = location.hash.match(/problem-(\d+)/);
        if (problemHash) select(Number(problemHash[1]));
      }
    } catch (error) {
      console.error("Unable to load catalog", error);
      $("results").innerHTML = `<div class="empty"><div class="empty-icon">!</div><h2>${escapeHtml(t("目录加载失败"))}</h2><p>${escapeHtml(error instanceof TypeError ? t("请通过本地 HTTP 服务打开网页，并从 CAM-Bench-OpenProblem 根目录启动服务。") : error.message)}</p></div>`;
    }
  }
  applyLanguage();
  start();
})();
