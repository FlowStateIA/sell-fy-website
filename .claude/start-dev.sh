#!/usr/bin/env bash
export PATH="/usr/local/bin:$PATH"
cd /Users/mrbermudez/sell-fy-website
exec node node_modules/vite/bin/vite.js --port 5173 --host
