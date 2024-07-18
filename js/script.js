//select landing page element
let landingpage=document.querySelector(".landing-page")

//
let imgsArray=["1.jfif","2.jpg","3.webp"]

setInterval(()=>{
         //get random mumber
         let randomNumber=Math.floor(Math.random()*imgsArray.length)
         console.log(randomNumber)

        //change Background Image Url
         landingpage.style.backgroundImage='url("images/'  +imgsArray[randomNumber]  + '")'
    
},1000)