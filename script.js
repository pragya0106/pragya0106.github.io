const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{const h=document.documentElement;progress.style.width=`${(h.scrollTop/(h.scrollHeight-h.clientHeight))*100}%`;});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const btn=document.getElementById("themeBtn");
const saved=localStorage.getItem("theme");
if(saved==="light") document.body.classList.add("light");
btn.addEventListener("click",()=>{document.body.classList.toggle("light");localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");});
