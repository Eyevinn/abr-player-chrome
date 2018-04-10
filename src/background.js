chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "getState") {
    sendResponse(true); // enabled
    return;
  }
});

chrome.webRequest.onBeforeRequest.addListener(function(req) {
  var re = new RegExp('(\.m3u8|\.mpd)[\?]?.*');
  if (req.url.match(re)) {
    return { redirectUrl: chrome.runtime.getURL('player.html') + "#" + req.url };
  } else {
    return null;
  }
}, {
  urls: [ "*://*/*.m3u8*", "*://*/*.mpd*" ],
  types: [ "main_frame" ]
}, [ "blocking" ] );