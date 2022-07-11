//add or remove global css class based on screen size
const div = document.getElementById('div');
   
window.addEventListener('resize',function(){
   
   if (window.innerWidth > 700) {
      div.classList.add("content-container"); 
   } else {
      div.classList.remove("content-container")
   }
})

