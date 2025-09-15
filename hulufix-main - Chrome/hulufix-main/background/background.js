if (typeof browser === "undefined") {
  // Polyfill so "browser" works in Chrome
  globalThis.browser = chrome;
}

// Define permissions (not strictly needed unless you want to request extra at runtime)
const background = {
  origins: ["*://*.hulu.com/*"],
};

// Handle extension install event
browser.runtime.onInstalled.addListener(() => {
  console.log("HuluFix installed. Ready to fix media controls on Hulu.");
});
