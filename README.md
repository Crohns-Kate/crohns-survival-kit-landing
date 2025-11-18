# NeuroGut Acoustics™ Marketing Website

A clean, professional marketing website for **NeuroGut Acoustics™** - a non-invasive GI sound insights and gut-brain awareness platform.

## 🚀 Quick Start (Replit)

### Option 1: One-Click Run in Replit
1. Open this project in Replit
2. Click the **"Run"** button at the top
3. Replit will automatically:
   - Install dependencies (`npm install`)
   - Start the server (`npm start`)
   - Open the website in the preview pane

### Option 2: Manual Setup in Replit
1. In the Replit Shell, run:
   ```bash
   npm install
   npm start
   ```
2. The website will be available in the Replit webview
3. You can also open it in a new tab using the external URL Replit provides

## 💻 Running Locally

If you want to run this on your local machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   - Navigate to: `http://localhost:3000`

## 📁 Project Structure

```
crohns-survival-kit-landing/
├── index.html          # Main website (single-page)
├── server.js           # Simple Express server
├── package.json        # Node.js dependencies
├── .replit             # Replit configuration
└── README.md           # This file
```

## 🛠️ Tech Stack

- **HTML5** - Structure
- **Tailwind CSS** (via CDN) - Styling
- **Vanilla JavaScript** - Smooth scrolling and form interactions
- **Express.js** - Simple static file server

## ✨ Features

- **Fully responsive** - Works on mobile, tablet, and desktop
- **No build process** - Uses Tailwind CSS via CDN
- **Clean, modern design** - Professional but warm aesthetic
- **Compliance-focused** - All copy carefully avoids medical claims
- **Ready for deployment** - Works on Replit, Netlify, Vercel, etc.

## 📝 Important Notes

### Contact Form
The contact form is currently **front-end only** and not connected to a backend. When submitted, it shows an alert asking users to email directly.

**To connect the form to a backend:**
1. Set up a backend API endpoint (e.g., using Formspree, EmailJS, or your own server)
2. Update the form submission handler in `index.html` (around line 470)
3. Replace the `alert()` with an actual API call

### Deployment

**Deploy to Replit:**
- Just click "Deploy" in Replit after testing

**Deploy to Netlify/Vercel:**
- These platforms can serve the `index.html` directly as a static site
- No server.js needed for static deployment
- Just drag and drop the `index.html` file

**Deploy to any Node.js host:**
- Push to GitHub
- Deploy with: `npm install && npm start`

## 🎨 Customization

### Colors
Edit the Tailwind config in `index.html` (around line 13) to change brand colors:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-blue': '#4A90E2',
                'brand-teal': '#50C9C3',
                // ... customize here
            }
        }
    }
}
```

### Content
All content is in `index.html`. Search for section headings to find and edit specific parts.

### Email Address
Update the placeholder email `hello@neurogut.acoustics` to your actual contact email.

## 📋 Future Enhancements

- [ ] Connect contact form to email backend (Formspree, SendGrid, etc.)
- [ ] Add actual email address once domain is set up
- [ ] Add analytics (Google Analytics, Plausible, etc.)
- [ ] Create a blog section for updates
- [ ] Add video/audio demos of the platform when available
- [ ] Integrate with actual NeuroGut Acoustics™ app when built

## 📄 License

All rights reserved © 2025 NeuroGut Acoustics™

---

**Built with care on the Gold Coast, Australia 🇦🇺**
