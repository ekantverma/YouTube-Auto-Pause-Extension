chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    if (tab.url.includes("youtube.com")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: playVideo
      });
    } else {
      const [youtubeTab] = await chrome.tabs.query({ url: "*://*.youtube.com/*" });
      if (youtubeTab) {
        chrome.scripting.executeScript({
          target: { tabId: youtubeTab.id },
          function: pauseVideo
        });
      }
    }
  });
  
  function playVideo() {
    const video = document.querySelector("video");
    if (video && video.paused) {
      video.play();
    }
  }
  
  function pauseVideo() {
    const video = document.querySelector("video");
    if (video && !video.paused) {
      video.pause();
    }
  }
  