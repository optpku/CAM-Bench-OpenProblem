(() => {
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
    return escapeHtml(source);
  }
  function restoreMath(value, math) {
    return value.replace(/@@MATH(\d+)@@/g, (_, index) => `<span class="math-inline">${renderFormula(math[Number(index)], false)}</span>`);
  }
  function inlineMarkdown(value) {
    const protectedValue = protectMath(value);
    let s = escapeHtml(protectedValue.text);
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*\*/g, "<em>$1</em>").replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
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
    const hay = `${p.title} ${p.part} ${p.authors} ${p.source} ${p.keywords} ${p.statement}`.toLowerCase();
    if (q && !hay.includes(q)) return false;
    if (state.filter === "all") return true;
    if (state.group === "clarity") return p.clarity.level === state.filter;
    return p[state.group] === state.filter;
  }
  function groupValue(p) { return state.group === "clarity" ? p.clarity.level : p[state.group]; }
  function detailError(message) {
    return `<div class="detail-placeholder"><div class="placeholder-mark">!</div><h2>详情加载失败</h2><p>${escapeHtml(message)}</p></div>`;
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
  function configureGroups() {
    const select = $("groupBy");
    if (state.collection === "named") {
      select.innerHTML = '<option value="domain">研究领域</option><option value="status">状态</option>';
      state.group = "domain";
    } else {
      select.innerHTML = '<option value="clarity">明确度</option><option value="part">研究领域</option><option value="typeLabel">问题类型</option><option value="verification">来源状态</option><option value="conciseness">statement 简洁程度</option><option value="familiarity">statement 知名度（文献代理）</option>';
      state.group = "clarity";
    }
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
    $("sortButton").innerHTML = `${state.collection === "named" ? "按名称排序" : "按编号排序"} <span>↕</span>`;
    $("detailPane").innerHTML = '<div class="detail-placeholder"><div class="placeholder-mark">↗</div><h2>选择一个问题</h2><p>详情会显示在这里</p></div>';
  }
  function renderFilters() {
    const values = state.group === "clarity" ? ["L4","L3","L2","L1"] : state.group === "conciseness" ? ["short", "medium", "long"] : state.group === "familiarity" ? ["high", "medium", "low"] : [...new Set(problems.map(groupValue))].sort((a,b)=>String(a).localeCompare(String(b),"zh"));
    const labels = state.group === "clarity" ? levelNames : state.collection === "named" ? namedGroupLabels : groupLabels[state.group] || {};
    $("filters").innerHTML = `<button class="chip ${state.filter === "all" ? "active" : ""}" data-filter="all">全部</button>` + values.map(v => `<button class="chip ${state.filter === v ? "active" : ""}" data-filter="${escapeHtml(v)}">${escapeHtml(labels[v] || v)}</button>`).join("");
    $("filters").querySelectorAll(".chip").forEach((button) => button.addEventListener("click", () => { state.filter = button.dataset.filter; render(); }));
  }
  function renderResults() {
    const list = problems.filter(matches).sort((a,b) => { const order = state.group === "clarity" ? clarityOrder : state.group === "conciseness" ? concisenessOrder : state.group === "familiarity" ? familiarityOrder : null; const av = order ? order[groupValue(a)] : String(groupValue(a)); const bv = order ? order[groupValue(b)] : String(groupValue(b)); const cmp = typeof av === "number" ? av-bv : av.localeCompare(bv,"zh"); const tie = state.collection === "named" ? String(a.name).localeCompare(String(b.name),"zh") : Number(a.id)-Number(b.id); return (cmp || tie) * (state.sortAsc ? 1 : -1); });
    $("resultCount").textContent = list.length; $("empty").hidden = list.length > 0;
    $("results").innerHTML = list.map((p) => p.kind === "conjecture" ? `<article class="problem-card conjecture-card ${state.selected === p.id ? "selected" : ""}" data-id="${escapeHtml(p.id)}" tabindex="0"><div class="card-meta"><span class="card-id">命名猜想</span><span class="pill conjecture-status">${escapeHtml(p.status)}</span><span class="pill">${escapeHtml(p.domain)}</span></div><h3 class="card-title">${escapeHtml(p.name)} <small>${escapeHtml(p.nameEn)}</small></h3><p class="card-summary">${inlineMarkdown(p.statement)}</p><div class="card-foot"><span>${escapeHtml(p.summary)}</span></div></article>` : `<article class="problem-card ${state.selected === p.id ? "selected" : ""}" data-id="${p.id}" tabindex="0"><div class="card-meta"><span class="card-id">#${String(p.id).padStart(3,"0")}</span><span class="pill ${p.clarity.level.toLowerCase()}">${p.clarity.level} · ${p.clarity.label}</span><span class="pill">${escapeHtml(p.part)}</span></div><h3 class="card-title">${escapeHtml(p.title)}</h3><p class="card-summary">${inlineMarkdown(p.statement || p.summary)}</p><div class="card-foot"><span>${escapeHtml(p.typeLabel)} · ${escapeHtml(p.concisenessLabel)} · ${escapeHtml(p.familiarityLabel)}</span><span class="score">明确度 ${p.clarity.score}/100</span></div></article>`).join("");
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
      $("detailPane").innerHTML = '<div class="detail-placeholder"><div class="placeholder-mark">…</div><h2>正在加载问题</h2><p>正在读取该题的 JSON 文件</p></div>';
      const response = await fetch(problemJsonUrl(summary.jsonFile), { cache: "no-cache" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const detail = await response.json();
      details.set(id, detail);
      if (state.selected === id) renderDetail(detail);
    } catch (error) {
      console.error("Unable to load problem JSON", error);
      if (state.selected === id) {
        const hint = error instanceof TypeError
          ? "请通过本地 HTTP 服务打开网页，并从 CAM-Bench-OpenProblem 根目录启动服务。"
          : `请求题目 JSON 失败：${error.message}`;
        $("detailPane").innerHTML = detailError(hint);
      }
    }
  }
  function renderConjectureDetail(p) {
    const sources = Array.isArray(p.sources) ? p.sources : [];
    const tags = Array.isArray(p.tags) ? p.tags : [];
    const sourceLinks = sources.map((source) => source && source.url
      ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label || source.url)} ↗</a>`
      : `<span>${escapeHtml(source?.label || "未列出")}</span>`).join("<br>");
    const statement = p.statement || p.summary || "暂无猜想陈述";
    const summary = p.summary && p.summary !== statement ? `<div class="detail-section"><h3>问题摘要</h3><p>${inlineMarkdown(p.summary)}</p></div>` : "";
    const relevance = p.relevance ? `<div class="detail-section"><h3>与本库的关联</h3><p>${inlineMarkdown(p.relevance)}</p></div>` : "";
    const tagMarkup = tags.map((tag) => `<span class="reason">${escapeHtml(tag)}</span>`).join("") || `<span class="detail-muted">未列出</span>`;
    $("detailPane").innerHTML = `<div class="detail conjecture-detail"><div class="detail-head"><div class="detail-kicker"><span>命名猜想</span><span>·</span><span>${escapeHtml(p.domain || "未分类")}</span><span class="pill conjecture-status">${escapeHtml(p.status || "未标注")}</span></div><h2>${escapeHtml(p.name || "未命名猜想")}</h2></div><div class="detail-body"><div class="detail-section named-statement"><h3>猜想陈述</h3><p>${inlineMarkdown(statement)}</p></div>${summary}${relevance}<div class="detail-section"><h3>关键词</h3><div class="reason-list">${tagMarkup}</div></div><div class="detail-section detail-source"><strong>来源：</strong><br>${sourceLinks || "<span>未列出</span>"}</div></div></div>`;
  }
  function renderDetail(p) {
    const source = p.source || p.authors || "未在条目中单独列出";
    const metadata = [
      `<strong>问题类型：</strong>${escapeHtml(p.typeLabel || "未标注")}`,
      `<strong>来源状态：</strong>${escapeHtml(p.verification || "未标注")}`,
      `<strong>statement：</strong>${escapeHtml(p.concisenessLabel || "未标注")}（复杂度 ${escapeHtml(p.statementComplexityScore ?? "未标注")}/100，${escapeHtml(p.statementLength ?? "未标注")} 字符）`,
      `<strong>文献可见度：</strong>${escapeHtml(p.familiarityLabel || "未标注")}`,
      `<strong>来源：</strong>${escapeHtml(source)}`,
    ].join("<br>");
    $("detailPane").innerHTML = `<div class="detail"><div class="detail-head"><div class="detail-kicker"><span>#${String(p.id).padStart(3,"0")}</span><span>·</span><span>${escapeHtml(p.part)}</span></div><h2>${escapeHtml(p.title)}</h2></div><div class="detail-body"><div class="detail-section"><h3>问题摘要</h3><p>${inlineMarkdown(p.statement || p.summary)}</p></div><div class="detail-section"><h3>原始条目</h3><div class="markdown">${markdown(p.content)}</div></div><div class="detail-section detail-source"><div class="detail-metadata">${metadata}</div><strong>文件：</strong>${escapeHtml(p.file)}<br><strong>关键词：</strong>${escapeHtml(p.keywords || "未提供")}</div></div></div>`;
    typesetMath($("detailPane"));
  }
  function render() { renderFilters(); renderResults(); }
  $("search").addEventListener("input", (e) => { state.query = e.target.value; renderResults(); });
  $("groupBy").addEventListener("change", (e) => { state.group = e.target.value; state.filter = "all"; render(); });
  $("sortButton").addEventListener("click", () => { state.sortAsc = !state.sortAsc; $("sortButton").innerHTML = `${state.sortAsc ? (state.collection === "named" ? "按名称排序" : "按编号排序") : "倒序浏览"} <span>↕</span>`; renderResults(); });
  $("collectionSelect").addEventListener("change", (e) => setCollection(e.target.value));
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
      $("results").innerHTML = `<div class="empty"><div class="empty-icon">!</div><h2>目录加载失败</h2><p>${escapeHtml(error instanceof TypeError ? "请通过本地 HTTP 服务打开网页，并从 CAM-Bench-OpenProblem 根目录启动服务。" : error.message)}</p></div>`;
    }
  }
  start();
})();
