const APP_CONFIG = {
  expectedMainnetChainId: 4663,
  expectedMainnetChainHex: "0x1237",
  mainnetName: "Robinhood Chain",
  contractsReady: false
};

const views = [...document.querySelectorAll("[data-view]")];
const links = [...document.querySelectorAll("[data-route]")];
const sidebar = document.querySelector("#sidebar");
const menuToggle = document.querySelector("#menu-toggle");
const notice = document.querySelector("#notice");
const connectButton = document.querySelector("#connect-wallet");
const walletLabel = document.querySelector("#wallet-label");
const networkLabel = document.querySelector("#network-label");
const metricWallet = document.querySelector("#metric-wallet");
const registrationWallet = document.querySelector("#registration-wallet");
const eligibilityWallet = document.querySelector("#eligibility-wallet");
const eligibilityForm = document.querySelector("#eligibility-form");
const eligibilityResult = document.querySelector("#eligibility-result");
const toast = document.querySelector("#toast");

let currentAccount = "";

function shortAddress(address) {
  return address ? `${address.slice(0, 6)}…${address.slice(-4)}` : "NOT CONNECTED";
}

function setRoute() {
  const requested = location.hash.slice(1) || "dashboard";
  const route = views.some(view => view.dataset.view === requested) ? requested : "dashboard";
  views.forEach(view => view.classList.toggle("active", view.dataset.view === route));
  links.forEach(link => {
    const active = link.dataset.route === route;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
  });
  sidebar?.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function showNotice(title, message, tone = "default") {
  notice.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
  notice.dataset.tone = tone;
}

async function refreshWallet() {
  if (!window.ethereum) {
    networkLabel.textContent = "WALLET NOT DETECTED";
    return;
  }
  const [accounts, chainIdHex] = await Promise.all([
    window.ethereum.request({ method: "eth_accounts" }),
    window.ethereum.request({ method: "eth_chainId" })
  ]);
  currentAccount = accounts?.[0] || "";
  const chainId = Number.parseInt(chainIdHex, 16);
  const connected = Boolean(currentAccount);

  connectButton.classList.toggle("connected", connected);
  walletLabel.textContent = connected ? shortAddress(currentAccount) : "CONNECT WALLET";
  metricWallet.textContent = connected ? shortAddress(currentAccount) : "NOT CONNECTED";
  registrationWallet.value = currentAccount || "";
  if (connected && !eligibilityWallet.value) eligibilityWallet.value = currentAccount;

  if (!connected) {
    networkLabel.textContent = "NOT CONNECTED";
  } else if (chainId === APP_CONFIG.expectedMainnetChainId) {
    networkLabel.textContent = APP_CONFIG.mainnetName.toUpperCase();
    showNotice("PRE-LAUNCH MODE", "Wallet connected. Contract actions remain locked until mainnet deployment and verification are complete.");
  } else {
    networkLabel.textContent = `WRONG NETWORK · CHAIN ${chainId}`;
    showNotice("WRONG NETWORK", `Switch to ${APP_CONFIG.mainnetName} only after official mainnet launch instructions are published.`, "warning");
  }
}

async function connectWallet() {
  if (!window.ethereum) {
    showNotice("WALLET NOT FOUND", "Open this dashboard inside a trusted EVM wallet browser or install a compatible wallet.", "warning");
    return;
  }
  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    await refreshWallet();
  } catch (error) {
    showNotice("CONNECTION CANCELLED", "No wallet permission was granted. No transaction was created.", "warning");
  }
}

function isAddress(value) {
  return /^0x[a-fA-F0-9]{40}$/.test(value.trim());
}

menuToggle?.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

connectButton?.addEventListener("click", connectWallet);
window.addEventListener("hashchange", setRoute);

eligibilityForm?.addEventListener("submit", event => {
  event.preventDefault();
  const address = eligibilityWallet.value.trim();
  eligibilityResult.classList.toggle("error", !isAddress(address));
  if (!isAddress(address)) {
    eligibilityResult.innerHTML = "<span>INVALID ADDRESS</span><strong>Check the wallet format</strong><p>Enter a complete EVM address beginning with 0x and containing 40 hexadecimal characters.</p>";
    return;
  }
  eligibilityResult.innerHTML = `<span>DATASET PENDING</span><strong>${shortAddress(address)}</strong><p>The address format is valid. Final eligibility data will appear after the audited snapshot dataset and claim contract are connected.</p>`;
});

document.querySelectorAll("[data-copy]").forEach(button => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      showToast("ADDRESS COPIED");
    } catch {
      showToast("COPY NOT AVAILABLE");
    }
  });
});

document.querySelectorAll(".history-filters button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".history-filters button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
  });
});

window.ethereum?.on?.("accountsChanged", refreshWallet);
window.ethereum?.on?.("chainChanged", refreshWallet);

setRoute();
refreshWallet().catch(() => {
  networkLabel.textContent = "CONNECTION UNAVAILABLE";
});
