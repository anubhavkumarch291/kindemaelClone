const navbar=document.querySelector("#nav");
window.addEventListener('scroll',()=>{
if(window.scrollY>100){
    navbar.style.position='fixed';
    navbar.style.top='0';
    navbar.style.left='0';
    navbar.style.width='100%';
    navbar.style.backgroundColor='white';
}else{
    navbar.style.position='fixed';
}
});