
let one=0;
document.getElementById('img-menu').addEventListener('click',()=>{
    document.getElementById('Home').classList.toggle('active');
    one++;
if(one%2==0){
    document.getElementById('img-menu').src='img/menu-bar.png';

}
else{
    document.getElementById('img-menu').src='img/cancel.png';
}


})

window.addEventListener('scroll', () => {
    // Your scroll logic here
    // Example: console.log(window.scrollY);
    document.getElementById('header').classList.add('header-test');
    

});
// window.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('header').style.height = '20vh';
// });
