const imgs = [
  "https://sayingimages.com/wp-content/uploads/back-to-work-break-over-now-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/enough-goofing-back-to-work-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/i-dont-wanna-back-to-work-meme.png",
  "https://media.makeameme.org/created/if-you-could-gwn8nh.jpg",
  "https://sayingimages.com/wp-content/uploads/the-best-things-back-to-work-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/we-must-back-to-work-meme.png",
  "https://i.shgcdn.com/e19defd3-1348-44dc-8794-c85656653cc1/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  "https://sayingimages.com/wp-content/uploads/back-to-work-reading-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/back-to-work-thinking-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/get-back-to-work-cat-meme.jpg",
  "https://winkgo.com/wp-content/uploads/2018/10/21-Back-To-Work-Memes-OutroB.gif",
  "https://sayingimages.com/wp-content/uploads/heres-an-idea-get-back-to-work-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/just-kidding-get-back-to-work-meme.png",
  "https://sayingimages.com/wp-content/uploads/stop-daydreaming-get-back-to-work-meme.jpg",
  "https://i.shgcdn.com/828ce242-960c-4e44-bc31-556240194665/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  "https://sayingimages.com/wp-content/uploads/conratulations-get-back-to-work-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/im-sorry-youre-tired-get-back-to-work-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/about-to-leave-work-memes.jpg",
];

const generateHTML = () => {
  const randomIdx = Math.floor(Math.random() * imgs.length);
  const url = window.location.host.split(".");
  const name = url.length === 2 ? url[0] : url[1];
  return `
    <div id="parent">
        <h1 style="font-size: 2rem;color: black;">${name} is blocked. Here's a meme </h1>
    <img src="${imgs[randomIdx]}" alt="This site is blocked."></img>
    </div>
    `;
};

setTimeout(checkSites, 0);
function checkSites() {
  chrome.storage.sync.get(["sites"], (res) => {
    res.sites.forEach((site) => {
      if (window.location.host.includes(site)) {
        console.log("site ", site, " is to be blocked from blocker");
        document.body.innerHTML = generateHTML();
        return;
      }
    });
  });
}
