// Slider
var utils=window.fizzyUIUtils,elem=document.querySelector(".carousel"),flkty=new Flickity(elem,{imagesLoaded:!0,wrapAround:!0,selectedAttraction:1,friction:1,setGallerySize:!1,draggable:!1,prevNextButtons:!1,pageDots:!1}),cellsButtonGroup=document.querySelector(".button-group--cells"),cellsButtons=utils.makeArray(cellsButtonGroup.children);
// update buttons on select
flkty.on("select",function(){var t=cellsButtonGroup.querySelector(".is-selected"),e=cellsButtonGroup.children[flkty.selectedIndex];t.classList.remove("is-selected"),e.classList.add("is-selected")}),
// cell select
cellsButtonGroup.addEventListener("click",function(t){if(matchesSelector(t.target,".button")){var e=cellsButtons.indexOf(t.target);flkty.select(e)}});
// previous
var previousButton=document.querySelector(".button--previous");previousButton.addEventListener("click",function(){flkty.previous()});
// next
var nextButton=document.querySelector(".button--next");nextButton.addEventListener("click",function(){flkty.next()}),window.addEventListener("load",function(){flkty.resize()});
// modal
var modal=document.getElementById("custom_modal"),auto=document.getElementById("popup_btn"),btn=document.getElementById("popup_btn"),close_btn=document.getElementsByClassName("close_btn")[0];btn.onclick=function(){modal.style.display="block",auto.style.display="none"},close_btn.onclick=function(){modal.style.display="none",auto.style.display="block"},window.load=function(t){modal.style.display="none",auto.style.display="block"},window.onclick=function(t){t.target===modal&&(modal.style.display="none",auto.style.display="block")};