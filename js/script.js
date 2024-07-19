//toggle spin class on icon
document.querySelector(".toggle-setting .fas").onclick=function(){
         //toggle class fa-spin for rotation in-self
         this.classList.toggle("fa-spin")
         document.querySelector(".setting-box").classList.toggle("open")
}




//select landing page element
let landingpage=document.querySelector(".landing-page")

//
let imgsArray=["1.jfif","2.jpg","3.webp","course-1.jpg"]

setInterval(()=>{
         //get random mumber
         let randomNumber=Math.floor(Math.random()*imgsArray.length)
         console.log(randomNumber)

        //change Background Image Url
         landingpage.style.backgroundImage='url("images/'  +imgsArray[randomNumber]  + '")'
    
},1000)