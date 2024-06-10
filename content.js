chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "pause") {
      const video = document.querySelector("video");
      if (video) {
        video.pause();
      }
    } else if (request.action === "play") {
      const video = document.querySelector("video");
      if (video) {
        video.play();
      }
    }
  });
  