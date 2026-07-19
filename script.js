function openQR(){
document.getElementById("qrModal").style.display="block";
}

function closeQR(){
document.getElementById("qrModal").style.display="none";
}

window.onclick=function(event){
const modal=document.getElementById("qrModal");

if(event.target==modal){
modal.style.display="none";
}
}
window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 1000);

    }, 2500);

});