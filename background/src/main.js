var browser = require("webextension-polyfill");

browser.runtime.onInstalled.addListener(details => {
  console.log("previousVersion", details.previousVersion);
});

browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

  // Send message when url changes
  if (changeInfo.url) {

    const request = {
      message: 'URL_CHANGE',
      url: changeInfo.url
    };

    browser.tabs.sendMessage( tabId, request);
  }
});