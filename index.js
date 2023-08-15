let images=[
    {
        url:"	https://www.masaischool.com/images/our-investors/india-q-borderless.svg"
    },
    {
        url:"https://www.masaischool.com/images/our-investors/unitus-borderless.svg"
    },
    {
        url:"https://www.masaischool.com/images/our-investors/omidyar-borderless.svg"
    }
];
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
    navbar.style.top='0';
    navbar.style.left='0';
    navbar.style.width='100%';
    navbar.style.backgroundColor='white';
}
});
let heading=document.querySelector('#heading');

heading.style.margin='auto';
heading.style.marginTop='130px';
heading.style.paddingTop='120px';
for(var i=0;i<2;i++){
    const div=document.createElement('div');
    div.style.width='60%';
    div.style.height='40px';
    div.style.textAlign='center';
    div.setAttribute('id','col-1'+(i+1));
    heading.appendChild(div);
}
let d=document.getElementById("col-11");
d.textContent="OUR INVESTORS";
d.style.display='flex';
d.style.justifyContent="center";
d.style.alignItems='center';
d.style.fontFamily='system-ui';
d.style.fontSize='48px';
d.style.fontWeight='bold';
let p=document.getElementById("col-12");
p.textContent='When outcomes drive you, the industry stands with you.'
p.style.display='flex';
p.style.justifyContent="center";
p.style.alignItems='center';
p.style.marginTop='28px';
p.style.color='grey';
p.style.fontSize='24px';

let para=document.querySelector("#para");
para.style.display='flex';
para.style.justifyContent='center';
para.style.alignItems='center';
para.style.margin='auto';
para.style.marginTop='30px';
for(let i=0;i<2;i++){
    const div=document.createElement('div');
    div.style.width='90%';
    div.style.height='400px';
    const note=document.createElement('p');
    note.setAttribute('id','md-1'+(i+1));
    div.appendChild(note);
    para.appendChild(div);
}
let md1=document.getElementById("md-11");
md1.textContent="The stalwarts of tech industry by our side";
md1.style.color='#3b3435';
md1.style.paddingLeft='50px';
md1.style.fontSize='36px';
md1.style.width ='70%'
let md2=document.getElementById("md-12");
md2.style.textTransform='none';
md2.style.fontSize='16px';
md2.style.fontWeight='100';
md2.style.paddingLeft='20px';
md2.style.paddingRight='20px';
md2.style.lineHeight='25px'
md2.textContent=`It is not easy to find the right talent for engineering teams
 in the Indian technology ecosystem even at an entry-level, and it is a problem 
 that impacts the best of the best organisations. While Masai School is an outcome-driven
  higher education institution, we still need the industry to come together and support an 
  alternative education system such as ours. Now, the time has finally come for the technology
   industry to come together and invest in its own engineering talent.

Cohort-based courses are proving to be yielding quality engineering talent with industry-level 
skills better than any degrees. Today, we are backed by the most seasoned founders, CXOs and
 experts of the technology industry in India.`

 const board=document.getElementById("board");
 board.style.textAlign='center';
 board.style.fontSize='36px';
board.textContent="Board Members";

const members=document.getElementById("members");
members.style.display='flex';
members.style.flexWrap='wrap';
members.style.width='90%';
members.style.margin='auto';
members.style.marginTop='30px';
members.style.justifyContent='space-around';
for(let i=0;i<3;i++){
let mem=document.createElement('div');
mem.style.margin='auto';
mem.style.width='300px';
mem.style.height='200px';
mem.setAttribute('id','r-1');
members.appendChild(mem);
}
const getImages=document.querySelectorAll("#r-1");
const getImage=images.map(imgObj=>{
    const img=document.createElement('img');
    img.style.width='100%';
    img.style.height='100%';
    img.src=imgObj.url;
    return img;
});
getImage.forEach((getImage,i)=>{
    getImages[i].appendChild(getImage);
});