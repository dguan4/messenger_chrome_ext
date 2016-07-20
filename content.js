// document.addEventListener('DOMContentLoaded', function() {
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action"){
        console.log("clicked");
        var button = $('a[aria-label="Send a Like"]').attr("onclick", function() {
            console.log("blah");
        });

        var otherBtn = document.querySelectorAll('a[aria-label="Send a Like"]');
        console.log(otherBtn);
        console.log(button);
    }
    // var button = $('a[aria-label="Send a Like"]').attr("onclick", function() {
    //     console.log("blah");
    // });

    // var otherBtn = document.querySelectorAll('a[aria-label="Send a Like"]');
    // console.log(otherBtn);
    // console.log(button);
});
// });