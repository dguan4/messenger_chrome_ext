chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab);
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs);
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
    if (tab.url.indexOf("https://www.messenger.com") != -1) {
        // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //     console.log(tabs);
        //     var activeTab = tabs[0];
        //     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
        // });
        console.log("in here");
        chrome.tabs.executeScript(tab.id, {
            "file": "content.js"
        }, function () {
            console.log("script executed");
        });
    }
});