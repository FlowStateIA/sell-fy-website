#!/usr/bin/env bash
# Se ubica solo: funciona en cualquier clon del repo, sin rutas de una máquina.
export PATH="/usr/local/bin:$PATH"
cd "$(dirname "$0")/.." || exit 1
exec node node_modules/vite/bin/vite.js --port 5173 --host
