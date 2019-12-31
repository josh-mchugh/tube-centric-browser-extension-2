var $ = require("jquery");
var browser = require("webextension-polyfill");
var UriTemplate = require("uri-template");

console.log("Hello, content script here.");

// Initialize the CSS styles for the content script
$(function() {
  const link = $("<link>")
    .attr("rel", "stylesheet")
    .attr("href", browser.runtime.getURL("/content-scripts/app/styles.css"));
  $("head").append(link);
});

// Initialize the app when the page is loaded the url matches
$(function() {
  if(isVideoEditUrl(window.location.pathname)) {
    initTagCounter();
  }
});

// URL Event Listener
browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // listen for messages sent from background.js
  if (request.message === 'URL_CHANGE') {
    console.log(JSON.stringify(request));
    const pathname = new URL(request.url).pathname;
    if(isVideoEditUrl(pathname)) {
      initTagCounter();
      const uriInfo = UriTemplate.extract("/video/{videoId}/edit", pathname);
      console.log(uriInfo.videoId);
    }
  }
});

function initTagCounter() {
  
  var observer = new MutationObserver(function(mutations) {
    
    mutations.forEach(mutation => {
      if($(mutation.target).attr("id") === "left") {

        const component = $("<app-tag-counter>");
        $(mutation.target).prepend(component);
        
        const componentScript = $("<script>")
          .attr("type", "text/javascript")
          .attr("src", browser.runtime.getURL("/content-scripts/app/app.js"));
        componentScript.insertAfter(component);
  
        this.disconnect();

      }
    });
  });

  observer.observe(document.body, {
      childList: true,
      subtree: true
  });
}

function isVideoEditUrl(pathname) {
  return new RegExp(/\/video\/[\S]*\/edit/i).test(pathname);
}
