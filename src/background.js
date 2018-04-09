chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "getState") {
    sendResponse(true); // enabled
    return;
  }
});

chrome.webRequest.onBeforeRequest.addListener(function(req) {
  if (req.url.endsWith(".m3u8") || req.url.endsWith(".mpd")) {
    return { redirectUrl: chrome.runtime.getURL('player.html') + "#" + req.url };
  } else {
    return null;
  }
}, {
  urls: [ "*://*/*.m3u8", "*://*/*.mpd" ],
  types: [ "main_frame" ]
}, [ "blocking" ] );