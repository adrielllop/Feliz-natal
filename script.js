const loader=document.getElementById("loader");
const site=document.getElementById("site");
const progress=document.getElementById("progress");
const percent=document.getElementById("percent");
const santa=document.getElementById("santaRunner");
let value=0;
const timer=setInterval(()=>{
  value=Math.min(100,value+1);
  progress.style.width=value+"%";
  percent.textContent=value+"%";
  santa.style.left=value+"%";
  if(value>=100){
    clearInterval(timer);
    setTimeout(()=>{loader.classList.add("done");site.classList.add("visible");},500);
  }
},38);
const modal=document.getElementById("modal");
const open=()=>{modal.classList.add("open");modal.setAttribute("aria-hidden","false");};
const close=()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true");};
document.getElementById("surpriseBtn").addEventListener("click",open);
document.getElementById("modalX").addEventListener("click",close);
document.getElementById("modalClose").addEventListener("click",close);
modal.addEventListener("click",e=>{if(e.target===modal)close();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")close();});