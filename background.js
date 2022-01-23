console.log("background 3");

// window.chrome.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     console.log("details", details.url);
//     return { cancel: false };
//   },
//   { urls: ["<all_urls>"] },
//   ["blocking"]
// );

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.get(["sites"], function (res) {
    if (!Array.isArray(res.sites)) {
      chrome.storage.sync.set({
        sites: [
          "netflix.com",
          "facebook.com",
          "primevideo.com",
          "hotstar.com",
          "instagram.com",
        ],
      });
    }
  });
});
