const btnNavbar = document.querySelector('#btnNav')
const navbar = document.querySelector('#navbar')
btnNavbar.addEventListener('click',cambiarColorMenu)

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { 
        navbar.classList.add('bg-black');
    } else {
        navbar.classList.remove('bg-black');
    }
});

function cambiarColorMenu(e){
    if(btnNavbar.classList.contains('collapsed')){
        navbar.classList.remove('bg-secondary')
    }else{
        navbar.classList.add('bg-secondary')
    }
}

