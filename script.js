const CONFIG = {
  v2Supply: 1500,
  v2Symbol: "AMV2",
  v2Contract: "TBA",
  addMaxSupply: "1,000,000,000",
  addContract: "TBA",
  openseaV1Url: "https://opensea.io/collection/adding-machine",
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
document.querySelectorAll("[data-opensea]").forEach(link => { link.href = CONFIG.openseaV1Url; });
document.querySelectorAll("[data-x-link]").forEach(link => { link.href = CONFIG.xUrl; });
