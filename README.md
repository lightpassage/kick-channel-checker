# Kick Channel Checker

A React TypeScript application to check if a Kick.com channel is currently live. Features a clean, dark theme design optimized for GitHub Pages deployment.

## Features

- 🎨 Modern dark theme with green accent colors
- ⚡ Real-time channel status checking (simulated in demo)
- 📱 Fully responsive design
- 🚀 Ready for GitHub Pages deployment
- ✨ Smooth animations and visual feedback

## Demo

This is a demonstration version with simulated responses. Due to CORS restrictions, the actual Kick.com API cannot be accessed directly from the browser.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kick-channel-checker.git
cd kick-channel-checker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000/kick-channel-checker`

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:
```json
"homepage": "https://yourusername.github.io/kick-channel-checker"
```

2. Build and deploy:
```bash
npm run deploy
```

This will build the app and push it to the `gh-pages` branch of your repository.

3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Save

Your app will be available at `https://yourusername.github.io/kick-channel-checker`

## Production Implementation

To use real Kick.com API data in production, you'll need to:

1. **Set up a backend proxy server** to handle API requests and bypass CORS restrictions
2. **Update the API endpoint** in `App.tsx` to point to your proxy server
3. **Handle authentication** if required by the Kick.com API

Example backend proxy implementation (Node.js/Express):
```javascript
app.get('/api/kick/:channel', async (req, res) => {
  try {
    const response = await fetch(`https://kick.com/api/v2/channels/${req.params.channel}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch channel data' });
  }
});
```

## Technologies Used

- React 19
- TypeScript
- CSS3 with animations
- Create React App
- GitHub Pages

## License

MIT License

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
