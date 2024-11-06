chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "captureVideoInfo") {
      const videoTitle = document.querySelector("h1.title").innerText;
      const videoUrl = window.location.href;
      sendResponse({ title: videoTitle, url: videoUrl });
    }
  });
  