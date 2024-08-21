const nav= document.getElementById('nav');

window.addEventListener('scroll',function(){
    scrollposition = window.scrollY;

    if(scrollposition>=60){
        nav.classList.add('nav-dark');
    }else if(scrollposition<=60){
        nav.classList.remove('nav-dark');
    }
})

document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('mouseover', function() {
        card.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseout', function() {
        card.style.transform = 'scale(1)';
    });
});

function showAlert() {
    alert("Gede Parwata Atmaja");
}
function showAlertSurya(){
    alert("Ida Bagus Surya Dharma");
}
function showAlertPratama(){
    alert("I Wayan Agus Pratama Putra");
}
