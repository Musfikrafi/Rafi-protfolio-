let menu_bg= document.querySelector(".menu-bg")

window.addEventListener("scroll",()=>{
 let scrolling = this.window.scrollY

 if (scrolling > 100) {
    menu_bg.classList.add("menucolor")
 }else{
    menu_bg.classList.remove("menucolor")
 }
})

let back_to_top = document.querySelector(".back-to-top")
back_to_top.addEventListener("click",function() {
   document.body.scrollTop=0;
   document.documentElement.scrollTop=0;
})
window.addEventListener("scroll",()=>{
if ( document.body.scrollTop >100 ||  document.documentElement.scrollTop >100) {
   back_to_top.style.display="block"
 }else{
   back_to_top.style.display="none"
 }
})