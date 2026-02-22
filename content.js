// content.js
const THEME_PREFIX = 'zen-theme-';

// Function to apply theme class
function applyTheme(themeName) {
  // Wait for body to be available
  if (!document.body) {
    requestAnimationFrame(() => applyTheme(themeName));
    return;
  }

  // Remove existing zen themes
  document.body.className = document.body.className
    .split(' ')
    .filter(c => !c.startsWith(THEME_PREFIX))
    .join(' ');
  
  if (themeName && themeName !== 'default') {
    document.body.classList.add(`${THEME_PREFIX}${themeName}`);
  }
}

// Initial load
chrome.storage.sync.get(['notionTheme'], (result) => {
  applyTheme(result.notionTheme);
});

// Listen for changes from popup
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && changes.notionTheme) {
    applyTheme(changes.notionTheme.newValue);
  }
});
