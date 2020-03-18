// Mouse Click
var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function() {
    if(content.className == "open") {
        content.className = "";
        button.innerHTML = "Read More";
    } else{
        content.className = "open";
        button.innerHTML = "Read Less";
    }
};