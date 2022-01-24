const sitesEl = document.getElementById("sites");
const submitEl = document.getElementById("submit");

submitEl.addEventListener("click", (e) => {
  e.preventDefault();
  const sites = sitesEl.value
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  chrome.storage.sync.set({ sites }, () => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (arrayOfTabs) {
        console.log("arrayOfTabs[0].url", arrayOfTabs[0].url.split("."));
        sites.forEach((site) => {
          if (!arrayOfTabs[0].url.includes(site)) return;
          console.log("site ", site, " is to be blocked from popup");
          chrome.tabs.reload(arrayOfTabs[0].id);
        });
      }
    );
  });
});

window.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["sites"], (res) => {
    sitesEl.value = res.sites.join("\n");
  });
});

chrome.runtime.onMessage.addListener(function (request, sender) {
  console.log(" req", request, sender);
  console.log(window);
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});
