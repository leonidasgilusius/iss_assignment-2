document.addEventListener("DOMContentLoaded", function() {
    console.log(new Date().toLocaleTimeString(), ", view, ", "Home Page");
});

document.addEventListener("click", function(event) {
    console.log(new Date().toLocaleTimeString(), ", click, ", event.target.tagName);
});