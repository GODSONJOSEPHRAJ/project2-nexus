// Add JavaScript for any interactive features
// For example, smooth scrolling on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// JavaScript for toggling menu on small screens
document.querySelector('.toggle-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('open');
});
var nav_link = document.getElementsById("navlink");

function showmenu(){
    navlink.style.right = "0";
}
function hidemenu(){
    navlink.style.right = "-200px";
}