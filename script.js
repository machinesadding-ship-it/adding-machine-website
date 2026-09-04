const CONFIG = {
  v2Supply: 1500,
  v2Symbol: "AMV2",
  v2Contract: "TBA",
  addMaxSupply: "1,000,000,000",
  addContract: "TBA",
  openseaV2Url: "https://opensea.io/collection/adding-machine-528868073/overview",
  xUrl: "https://x.com/addingmachinee"
};

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
}));
document.querySelectorAll("[data-opensea]").forEach(link => { link.href = CONFIG.openseaV2Url; });
document.querySelectorAll("[data-x-link]").forEach(link => { link.href = CONFIG.xUrl; });
