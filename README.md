# 🧗 Climbing Trollhatan

A simple static website to gather interest in starting a climbing community in Trollhatan, Sweden.

## Features

✨ **Visitor Counter** - Tracks total visits using browser local storage  
📊 **Response Tracking** - Collects Yes/No/Maybe responses about climbing interest (one per browser)  
📱 **Responsive Design** - Beautiful, mobile-friendly interface  
🔗 **Survey Integration** - Easy link to Google Form for detailed information gathering  

## What's Included

- `index.html` - Main website content
- `style.css` - Beautiful styling with gradient background and responsive design
- `script.js` - Visitor counter and response tracking logic
- `README.md` - This file

## How It Works

### Visitor Counter
Each visit to the page increments a counter stored in the browser's localStorage. The count persists across visits and browser sessions.

### Response Tracking
- Users can click Yes, No, or Maybe to indicate climbing interest
- Each browser can only vote once (tracked via localStorage)
- Real-time statistics show community response
- No personal data is collected

## Hosting on GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click "+" in the top right and select "New repository"
3. Name it `Climbing` (or your preferred name)
4. Choose "Public" so it can be hosted
5. Click "Create repository"

### Step 2: Upload Files to GitHub
1. Clone the repository to your computer:
   ```
   git clone https://github.com/YOUR-USERNAME/Climbing.git
   cd Climbing
   ```

2. Copy these files into the repository folder:
   - `index.html`
   - `style.css`
   - `script.js`

3. Commit and push to GitHub:
   ```
   git add .
   git commit -m "Initial commit: Climbing community website"
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" (gear icon)
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"

Your site will be live at: `https://YOUR-USERNAME.github.io/Climbing/`

## Customization

### Change the Google Form Link
1. Create a Google Form for your survey
2. Get the share link (should look like `https://forms.gle/XXXXX`)
3. Open `index.html` and find this line:
   ```html
   <a href="https://forms.gle/placeholder" target="_blank" class="survey-btn">
   ```
4. Replace `https://forms.gle/placeholder` with your actual form URL
5. Commit and push the changes

### Modify the Content
Edit the text in `index.html` to personalize:
- Your name and background
- Your climbing goals
- Any additional information you want to share

### Change Colors
Edit the colors in `style.css`:
- Primary color: Look for `#667eea` and `#764ba2` (purple gradient)
- Button colors: Look for `.btn-yes`, `.btn-maybe`, `.btn-no` classes

## Browser Compatibility

Works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Notes

- **Local Storage**: Visit counter and responses are stored in browser localStorage
- **Privacy**: No personal information is collected. Statistics are stored locally in each visitor's browser
- **One Vote Per Browser**: Each browser can only submit one yes/no/maybe response
- **Reset Data**: Users can clear their browser cache to reset the counter and responses (for testing)

## Future Enhancements

Consider adding:
- Backend database to store responses permanently
- Map showing climbing spots in Trollhatan
- Photos or videos of potential climbing areas
- Community forum or discussion board
- Integration with climbing databases (8a.nu, Mountain Project, etc.)

## License

Free to use and modify for your climbing community!

---

Built with ❤️ for the Trollhatan climbing community
