document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = document.querySelectorAll('.theme-btn');
  const statusMsg = document.getElementById('status-msg');

  // Load the current active theme
  chrome.storage.sync.get(['notionTheme'], (result) => {
    const activeTheme = result.notionTheme || 'default';
    setActiveButton(activeTheme);
  });

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const themeName = btn.getAttribute('data-theme');
      
      // Save theme to storage
      chrome.storage.sync.set({ notionTheme: themeName }, () => {
        // Update UI
        setActiveButton(themeName);
        
        // Show success message temporarily
        const originalText = statusMsg.innerText;
        statusMsg.innerText = 'Theme applied!';
        statusMsg.classList.add('success');
        
        setTimeout(() => {
          statusMsg.innerText = originalText;
          statusMsg.classList.remove('success');
        }, 2000);
      });
    });
  });

  function setActiveButton(themeName) {
    themeButtons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.theme-btn[data-theme="${themeName}"]`);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
  }
});
