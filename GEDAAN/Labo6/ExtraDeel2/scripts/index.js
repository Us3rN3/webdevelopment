document.addEventListener("DOMContentLoaded", function() {
    let listItems = document.querySelectorAll("li");
    listItems.forEach(function(item) {
        item.classList.add("listitem");
    });

    let style = document.createElement("style");
    style.textContent = ".listitem { color: red; }";
    document.head.appendChild(style);
});

document.addEventListener("DOMContentLoaded", function() {
    let img = document.createElement("img");
    img.src = "../img/1038860.jpg";
    document.body.appendChild(img);
});