// modal

var modal = document.getElementById("custom_modal");
var auto = document.getElementById("popup_btn");
var btn = document.getElementById("popup_btn");
var close_btn = document.getElementsByClassName("close_btn")[0];
var cancel_btn = document.getElementsByClassName("cancel_btn")[0];

btn.onclick = function() {
    modal.style.display = "block";
         auto.style.display = "none";
}

 close_btn.onclick = function() {
     modal.style.display = "none";
     auto.style.display = "block";
 }

window.load = function(event) {
    modal.style.display = "none";
   auto.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
   auto.style.display = "block";
    }
}
