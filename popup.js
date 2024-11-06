document.getElementById("start").addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "startTranslation" });
  });
  
  document.getElementById("stop").addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "stopTranslation" });
  });
  