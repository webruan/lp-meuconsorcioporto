document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("body"),t=document.getElementById("menu-button"),n=document.querySelectorAll(".link-button"),o=document.getElementById("menu-modal"),c=document.querySelector(".icon"),d=document.getElementById("close");function l(){c.style.opacity="1",o.style.display="none",e.style.overflow="auto"}t.addEventListener("click",(function(){c.style.opacity="0",o.style.display="block",e.style.overflowY="hidden"})),d.addEventListener("click",l),n.forEach((e=>{e.addEventListener("click",l)}))}));