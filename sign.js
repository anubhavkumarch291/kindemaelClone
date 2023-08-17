function signIn(){
    window.location.href='login.html';
}
const container=document.querySelector("#container");
container.style.margin='auto';
container.style.width='90%';
container.style.height='580px';
container.style.marginTop='50px';
container.style.justifyContent='center';
container.style.alignItems='center';
var array=JSON.parse(localStorage.getItem("id"))||[];
document.querySelector("form").addEventListener("submit",function(e){
   e.preventDefault();
   const username=document.querySelector("#name").value;
   const password=document.querySelector("#password").value;
   const email=document.querySelector("#email").value;
   let obj={username,password,email};
   array.push(obj);
   if(username==""||password==""||email==""){
    alert("Please Enter the complete Details");
   }else{
    localStorage.setItem("id",JSON.stringify(array));
    alert("Account Created Successfully");
    window.location.href="login.html";
   }
   document.querySelector("#name").value="";
   document.querySelector("#password").value="";
   document.querySelector("#email").value="";
})