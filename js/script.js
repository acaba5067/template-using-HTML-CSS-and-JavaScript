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

// Random Background option 
let backgroundOption=true;

// variable to control the  Background interval
let backgroundInterval

//Check if There is alocal storage Random Background Item
let backgroundLocateItem=localStorage.getItem("background_option")

//check if Random Background Local Storage is Not Empty
if(backgroundLocateItem !==null){
    if(backgroundLocateItem === "true")
    {
        backgroundOption=true
    }
    else{
        backgroundOption=false
    }
    console.log(backgroundLocateItem)

    //Remove Active class from all spans
    document.querySelectorAll(".random-backgrounds span").forEach(element=>{
        element.classList.remove("active")
    })
    if(backgroundLocateItem==="true"){
        document.querySelector(".random-backgrounds .yes").classList.add("active")

    }
    else{
        document.querySelector(".random-backgrounds .no").classList.add("active")
    }

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
              if(e.target.dataset.background === 'yes')
                {
                    backgroundOption=true
                    randomizeImgs()
                    localStorage.setItem("background_option",true)
                    

              }

              else{
                backgroundOption=false

                clearInterval(backgroundInterval)
                localStorage.setItem("background_option",false)
                }
         })
})






//select landing page element
let landingpage=document.querySelector(".landing-page")

// Get Array of IMgs
let imgsArray=["1.jfif","2.jpg","3.webp","course-1.jpg"]

//function to randomize imgs
function randomizeImgs(){
   if(backgroundOption===true)
   {
    backgroundInterval=setInterval(()=>{
        //get random mumber
        let randomNumber=Math.floor(Math.random()*imgsArray.length)
        //console.log(randomNumber)

       //change Background Image Url
        landingpage.style.backgroundImage='url("images/'  +imgsArray[randomNumber]  + '")'
   
},1000)
   }

}


//select Skills Selector

let OurSkills=document.querySelector(".skills")
window.onscroll=function(){
    //skills offset top
    let skillsOffsetTop=OurSkills.offsetTop;

    //skills outer height
    let skillsOUterHeight=OurSkills.offsetHeight


    //window height

    let windowHeight=this.innerHeight

    //window scrolltop
    let windowScrollTop=this.pageYOffset

    if(windowScrollTop>(skillsOffsetTop>(skillsOffsetTop+skillsOUterHeight-windowHeight))){
        let allskills=document.querySelectorAll(".skill-box .skill-progress span")
        allskills.forEach(skill=>{
            skill.style.width=skill.dataset.progress
        })

    }

    this.console.log(skillsOUterHeight)
}



//create popup with the image
let OurGallery=document.querySelectorAll(".gallery img");
OurGallery.forEach(img=>{
    img.addEventListener("click",(e)=>{
        //create overlay element
        let overlay=document.createElement("div")
        //add class to overlay
        overlay.className="popup-overlay"
        // append overlay to the body
        document.body.appendChild(overlay)

        //create popup Box
        let popupBox=document.createElement("div");
        //add class to the popup Box
        popupBox.className='popup-box'
        //create the image
        let popupImage=document.createElement("img")
        //set image source
        popupImage.src=img.src

        //Add Image to popup Box
        popupBox.appendChild(popupImage)
        //append the popup box to body
        document.body.appendChild(popupBox)

    })
})
