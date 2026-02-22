# Notion Palette Pro

Notion Palette Pro is a professional, high-performance browser extension designed to bring beautiful, curated color palettes to your Notion workspace. Unlike simple CSS injectors, Notion Palette Pro overrides over 100 internal Notion CSS variables to ensure comprehensive coverage across every UI surface—from the sidebar and frames to cards, tables, and even popups.

<!-- ![Notion Palette Pro Showcasing Dracula Theme](screenshots/dracula_preview.png) -->

## ✨ Features

- **Professional Palettes:** Choose from 11+ industry-standard themes (Nord, Tokyo Night, Dracula, etc.).
- **Full UI Coverage:** Complete overrides for all background, border, text, and icon variables.
- **Enhanced Readability:** Custom-tuned tag color palettes for dark themes, ensuring perfectly balanced contrast for every tag type.
- **Robust Injection:** Advanced enforcement rules prevent Notion's internal "light/dark" wrappers from overriding your chosen style.
- **Lightweight & Fast:** Zero impact on page load speed; styles apply instantly.

## 🎨 Themes Included

### Dark Themes

- **Nord:** Arctic slate-blue for a cool, focused environment.
- **Tokyo Night:** Deep purple/blue inspired by the popular VS Code theme.
- **Midnight:** High-contrast navy for deep focus.
- **Dracula:** The classic purple-gray aesthetic for dark mode enthusiasts.
- **Solarized:** The iconic teal-focused palette by Ethan Schoonover.
- **Rosé Pine:** Warm dark aesthetics with elegant rose accents.
- **Catppuccin:** Soothing pastel-themed dark mode.
- **One Dark:** Inspired by the signature Atom editor design.
- **Everforest:** A nature-inspired green-based theme for reduced eye strain.

### Light Themes

- **Sepia:** Warm cream tones for a pleasant reading experience.
- **Clean Gray:** Minimalist GitHub-style interface.

## 🛠️ Installation

### For Developers (Manual Install)

1. Clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the extension folder.

## 🚀 How to Use

Follow these simple steps to transform your Notion experience:

1. **Install the Extension:**
   - Go to `chrome://extensions/` in your browser.
   - Click **Load unpacked** and select the `/NotionTheme` folder.
2. **Open Notion:**
   - Go to [notion.so](https://www.notion.so) and log in.
3. **Open Notion Palette Pro:**
   - Click the **Puzzle Piece** icon (Extensions) in your browser toolbar.
   - Find **Notion Palette Pro** and pin it for easy access.
4. **Choose Your Vibe:**
   - Click the Notion Palette Pro icon to open the theme picker.
   - Select any of the 11+ professional themes.
   - Your Notion workspace will update **instantly** without a page refresh!

## 📸 Screenshots

![Nord Theme Verified](screenshots/nord_verification.png)
_(Note: Screenshots are located in the screenshots/ directory)_

## 🏗️ Project Structure

- `manifest.json`: Extension configuration.
- `theme.css`: The core theme engine with 100+ variable overrides.
- `content.js`: Handles real-time CSS injection.
- `popup.html/css/js`: The clean, modern theme picker interface.
- `background.js`: Manages extension lifecycle.

## 🤝 Contributing

Feel free to open issues or submit pull requests with new theme ideas!

---

_Notion Palette Pro is not affiliated with Notion Labs, Inc._
