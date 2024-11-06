chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "startTranslation") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { type: "captureVideoInfo" }, (response) => {
          if (response) {
            fetch("http://localhost:5000/start", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ url: response.url, title: response.title }),
            });
          }
        });
      });
    } else if (request.type === "stopTranslation") {
      fetch("http://localhost:5000/stop", { method: "POST" });
    }
  });
  