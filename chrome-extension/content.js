chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    alert('updated from contentscript');
   if(tab.url.includes('google.com')) {
      chrome.browserAction.setIcon({path:"iconGreen.png"});
    }
 });


