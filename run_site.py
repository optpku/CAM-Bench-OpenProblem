#!/usr/bin/env python3
"""Build and serve the CAM-Bench Open Problems browser.

Run from any directory with ``python3 run_site.py``. The repository root is
served intentionally: the page lives in ``site/`` while its problem JSON
files live below ``open_problems/``.
"""

from __future__ import annotations

import argparse
import http.server
import socket
import subprocess
import sys
import threading
import webbrowser
from pathlib import Path


ROOT = Path(__file__).resolve().parent


def available_port(requested: int) -> int:
    if requested:
        return requested
    with socket.socket() as sock:
        sock.bind(("127.0.0.1", 0))
        return int(sock.getsockname()[1])


def rebuild_catalog() -> None:
    command = [sys.executable, str(ROOT / "site" / "build_catalog.py")]
    subprocess.run(command, cwd=ROOT, check=True)


def main() -> None:
    parser = argparse.ArgumentParser(description="Serve the CAM-Bench Open Problems browser")
    parser.add_argument("--port", type=int, default=0, help="port to use (default: choose a free port)")
    parser.add_argument("--no-browser", action="store_true", help="print the URL without opening a browser")
    parser.add_argument("--no-build", action="store_true", help="skip rebuilding catalog.json and problem JSON files")
    args = parser.parse_args()

    if not args.no_build:
        rebuild_catalog()

    port = available_port(args.port)
    handler = lambda *handler_args: http.server.SimpleHTTPRequestHandler(
        *handler_args, directory=str(ROOT)
    )
    try:
        server = http.server.ThreadingHTTPServer(("127.0.0.1", port), handler)
    except OSError as error:
        parser.error(f"无法在端口 {port} 启动服务: {error}")

    url = f"http://127.0.0.1:{port}/site/"
    print(f"CAM-Bench 网页已启动: {url}")
    print("按 Ctrl+C 停止服务。")
    if not args.no_browser:
        threading.Timer(0.2, webbrowser.open, args=(url,)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n正在停止服务。")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
