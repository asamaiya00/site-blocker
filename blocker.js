const toBlock = [
  "netflix.com",
  "facebook.com",
  "primevideo.com",
  "instagram.com",
];
const imgs = [
  "https://sayingimages.com/wp-content/uploads/back-to-work-break-over-now-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/enough-goofing-back-to-work-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/i-dont-wanna-back-to-work-meme.png",
  "https://media.makeameme.org/created/if-you-could-gwn8nh.jpg",
  "https://sayingimages.com/wp-content/uploads/the-best-things-back-to-work-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/we-must-back-to-work-meme.png",
  "https://sayingimages.com/wp-content/uploads/back-to-work-reading-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/back-to-work-thinking-meme.jpg",
  //   "http://www.quickmeme.com/img/81/81f6f5ae89e3413563665047c6b934ada835ff9aa6eb99cbabb16128e6fda018.jpg",
  "https://sayingimages.com/wp-content/uploads/heres-an-idea-get-back-to-work-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/get-back-to-work-cat-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/im-sorry-youre-tired-get-back-to-work-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/just-kidding-get-back-to-work-meme.png",
  "https://sayingimages.com/wp-content/uploads/stop-daydreaming-get-back-to-work-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/conratulations-get-back-to-work-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/about-to-leave-work-memes.jpg",
];

const generateHTML = () => {
  const randomIdx = Math.floor(Math.random() * imgs.length);

  return `
    <div id="parent">

    <img src="${imgs[randomIdx]}" alt="This site is blocked."></img>
    </div>
    `;
};

const loadCSS = () => {
  return `
        <style>
            body{
                margin:0;
            }
            #parent{
                height: 100vh;
                width: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        </style>
    `;
};
toBlock.forEach((site) => {
  if (window.location.href.includes(site)) {
    console.log("site", site, "is blocked");
    document.body.innerHTML = generateHTML();
    document.head.innerHTML = loadCSS();
  }
});
