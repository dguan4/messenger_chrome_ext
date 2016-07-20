alert("hello");

document.addEventListener('DOMContentLoaded', function() {
    var button = $('a[aria-label="Send a Like"]');

    var otherBtn = document.querySelectorAll('a[aria-label="Send a Like"]');
    console.log(otherBtn);
    console.log(button);
});