#!/bin/bash

# Cloudflare Tunnel Setup for Navam Jewellers
# This script starts a local dev server and creates a public tunnel

echo "🚀 Starting Navam Jewellers with Cloudflare Tunnel..."
echo ""

# Start Next.js dev server in background
echo "📦 Starting Next.js development server..."
npm run dev > /dev/null 2>&1 &
DEV_SERVER_PID=$!
echo "✓ Dev server started (PID: $DEV_SERVER_PID)"

# Wait for dev server to be ready
echo "⏳ Waiting for dev server to initialize..."
sleep 5

# Determine which port the dev server is using
PORT=3000
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    PORT=3000
elif lsof -Pi :3001 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    PORT=3001
elif lsof -Pi :3002 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    PORT=3002
fi

echo "✓ Dev server running on port $PORT"
echo ""
echo "🌐 Creating Cloudflare Tunnel..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start cloudflare tunnel
cloudflared tunnel --url http://localhost:$PORT

# Cleanup on exit
trap "kill $DEV_SERVER_PID 2>/dev/null" EXIT
