const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname)));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✨ NeuroGut Acoustics™ website is running!`);
    console.log(`🌐 Open your browser to: http://localhost:${PORT}`);
    console.log(`📱 Server is ready for Replit deployment\n`);
});
