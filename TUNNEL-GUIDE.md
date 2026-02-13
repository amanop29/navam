# Cloudflare Tunnel Setup 🚀

Share your local Navam Jewellers development server with anyone via a public URL using Cloudflare Tunnel.

## Quick Start

### Option 1: Using the Script (Easiest)
```bash
./start-tunnel.sh
```

This will:
1. Start your Next.js dev server automatically
2. Create a Cloudflare Tunnel
3. Display a public URL (e.g., `https://random-word-word.trycloudflare.com`)

### Option 2: Manual Setup

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **In a new terminal, create the tunnel:**
   ```bash
   cloudflared tunnel --url http://localhost:3000
   ```
   *(Use port 3001 if 3000 is already in use)*

3. **Copy the public URL** that appears in the terminal (looks like `https://xyz.trycloudflare.com`)

4. **Share the URL** with anyone! They can access your local site from anywhere.

## What You'll See

When the tunnel starts, you'll see output like:
```
2026-02-14T04:00:00Z INF +--------------------------------------------------------------------------------------------+
2026-02-14T04:00:00Z INF |  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
2026-02-14T04:00:00Z INF |  https://random-word-word.trycloudflare.com                                                |
2026-02-14T04:00:00Z INF +--------------------------------------------------------------------------------------------+
```

## Features

✅ **No signup required** - Works instantly with free Cloudflare Tunnel
✅ **HTTPS by default** - Secure connections
✅ **Random URLs** - New URL each time you start the tunnel
✅ **Fast & reliable** - Powered by Cloudflare's global network
✅ **Perfect for sharing** - Show clients, test on mobile, get feedback

## Use Cases

- 📱 **Test on mobile devices** - Access your local site from your phone
- 👥 **Client demos** - Share work-in-progress with clients
- 🔄 **Cross-browser testing** - Test on different devices/browsers
- 💬 **Get feedback** - Share with team members remotely

## Important Notes

- The tunnel URL changes each time you restart
- The tunnel stays active as long as the process is running
- Press `Ctrl+C` to stop the tunnel and dev server
- Free tunnels are temporary and meant for development/testing only

## Troubleshooting

### Port already in use
If you see "Port 3000 is in use", the script will automatically try 3001, 3002, etc.

### Tunnel won't connect
- Ensure your dev server is running first
- Check that the port number matches
- Try restarting both the dev server and tunnel

### Update cloudflared
```bash
brew upgrade cloudflared
```

## Additional Resources

- [Cloudflare Tunnel Docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)
- [Next.js Documentation](https://nextjs.org/docs)
