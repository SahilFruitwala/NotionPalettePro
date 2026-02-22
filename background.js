// background.js

chrome.runtime.onInstalled.addListener(() => {
  console.log("Notion Palette Pro extension installed");
  // Set default theme state in storage on install
  chrome.storage.sync.get(["notionTheme"], (result) => {
    if (!result.notionTheme) {
      chrome.storage.sync.set({ notionTheme: "default" });
    }
  });
});
