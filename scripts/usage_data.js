document.addEventListener("DOMContentLoaded", function() {
    console.log(new Date().toLocaleTimeString(), ", view, ", "Home Page");
});

document.addEventListener("click", function(event) {
    const tag = event.target.tagName;
    const id = event.target.id ? `#${event.target.id}` : '';
    const classes = event.target.className ? `.${event.target.className.toString().replace(/\s+/g, '.')}` : '';
    
    console.log(new Date().toLocaleTimeString(), ", click, ", tag + id + classes);
});

