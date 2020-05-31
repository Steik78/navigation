var btnIcon = document.querySelector('#icon')
var nav = document.querySelector('.list_nav')
btnIcon.addEventListener('click', function(){
    if(nav.style.display === "block"){
        nav.style.display = "none";
    }else{
        nav.style.display = "block"
    }
})