#!/bin/bash

set -e
cd "$(dirname "$0")"

PORT="${PORT:-4173}"
URL="http://localhost:${PORT}/"

if ! command -v python3 >/dev/null 2>&1; then
  echo "未找到 python3，请先安装 Python 3。"
  read -r -p "按回车键退出..."
  exit 1
fi

SERVER_LOG="${TMPDIR:-/tmp}/tangjing-portfolio-server-${PORT}.log"
python3 "启动网站.py" --port "$PORT" >"$SERVER_LOG" 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT
sleep 0.5

if ! kill -0 "$SERVER_PID" 2>/dev/null; then
  cat "$SERVER_LOG"
  echo "网站启动失败，请检查端口 ${PORT} 是否已被占用。"
  read -r -p "按回车键退出..."
  exit 1
fi

open "$URL" >/dev/null 2>&1 || true
echo "网站已启动：$URL"
echo "关闭此窗口即可停止服务。"
wait "$SERVER_PID"
