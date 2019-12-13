var $ = require("jquery");
var browser = require("webextension-polyfill");

console.log("Hello, content script here.");

// Initialize the CSS styles for the content script
$(function() {
    const link = $("<link>")
      .attr("rel", "stylesheet")
      .attr("href", browser.runtime.getURL("/content-scripts/app/styles.css"));
    $("head").append(link);
    const app = $("<script>")
        .attr("type", "text/javascript")
        .attr("src", browser.runtime.getURL("/content-scripts/app/app.js"));
    $("head").append(app);
});

// Observe the DOM until the element is present
var observer = new MutationObserver(function(mutations) {
    
  const leftContainer = $("#left");
  if ($(leftContainer).length) {
    
    if($("#tcAppVideoMeta").length === 0) {
      const appComponent = $("<app-counter>");
      $(leftContainer).prepend(appComponent);
    }
    this.disconnect();
  }
});

// Start observing
observer.observe(document.body, { //document.body is node target to observe
    childList: true, //This is a must have for the observer with subtree
    subtree: true //Set to true if changes must also be observed in descendants.
});
