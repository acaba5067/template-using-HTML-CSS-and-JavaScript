//check if there is local storage color option
let maincolors=localStorage.getItem("color_option")
if(maincolors !==null){
         // console.log('local storage is not empty you can set it on root now')
         // console.log(localStorage.getItem("color_option"))
         document.documentElement.style.setProperty('--main-color',maincolors)

             //Remove active class from All colors list item
             document.querySelectorAll(".colors-list li").forEach(element=>{
                element.classList.remove("active")
                 //Add Active Class on Element with Data-color ===Local Storage item
                 if(element.dataset.color===maincolors){
                    //Add Active Class
                    element.classList.add("active")
                 }
            })

               

}

    //click on toggle settings gear
document.querySelector(".toggle-setting .fas").onclick=function(){
         //toggle class fa-spin for rotation in-self
         this.classList.toggle("fa-spin")
         //toggle class open on main settings box
         document.querySelector(".setting-box").classList.toggle("open")
}


//switch colors

const colorsli=document.querySelectorAll(".colors-list li");
//loop on All list items

colorsli.forEach(li =>{
         //click on every list items
         li.addEventListener("click",(e)=>{
                  //set color on root
                  document.documentElement.style.setProperty('--main-color',e.target.dataset.color)

                  //set color on local storage 
                  localStorage.setItem("color_option",e.target.dataset.color)


                  //REmove active class from All childern
                  e.target.parentElement.querySelectorAll(".active").forEach(element=>{
                           element.classList.remove("active")
                  })
              //add active class on self 
              e.target.classList.add("active");
         })
})

//switch background option 
const randomBackEl=document.querySelectorAll(".random-backgrounds span");

//loop on All Span

randomBackEl.forEach(span =>{
         //click on every span
         span.addEventListener("click",(e)=>{
                 

                  
                  //REmove active class from All span
                  e.target.parentElement.querySelectorAll(".active").forEach(element=>{
                           element.classList.remove("active")
                  })
              //add active class on self 
              e.target.classList.add("active");
         })
})






//select landing page element
let landingpage=document.querySelector(".landing-page")

//
let imgsArray=["1.jfif","2.jpg","3.webp","course-1.jpg"]

setInterval(()=>{
         //get random mumber
         let randomNumber=Math.floor(Math.random()*imgsArray.length)
         //console.log(randomNumber)

        //change Background Image Url
         landingpage.style.backgroundImage='url("images/'  +imgsArray[randomNumber]  + '")'
    
},1000)