console.log('Loaded!');
var element=document.getElementById('main');
element.innerHTML="New Value";
var image=document.getElementById('i1');
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+1;
    image.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};
