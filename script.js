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