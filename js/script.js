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
 //Remove Active class from all spans
 document.querySelectorAll(".random-backgrounds span").forEach(element=>{
    element.classList.remove("active")
})

//check if Random Background Local Storage is Not Empty
if(backgroundLocateItem !==null){
    if(backgroundLocateItem === "true")
    {
        backgroundOption=true
        document.querySelector(".random-backgrounds .yes").classList.add("active")
    }
    else{
        backgroundOption=false
        document.querySelector(".random-backgrounds .no").classList.add("active")
    }
    console.log(backgroundLocateItem)
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
                 handleactive(e);
         })
})

//switch background option 
const randomBackEl=document.querySelectorAll(".random-backgrounds span");

//loop on All Span

randomBackEl.forEach(span =>{
         //click on every span
         span.addEventListener("click",(e)=>{
                     
            handleactive(e);
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


        if(img.alt!==null){
            //create heading 
            let imgheading=document.createElement("h3")
            //create text for heading
            let imgText=document.createTextNode(img.alt)
            //Append the text to the Heading
            imgheading.appendChild(imgText)
            //append the heading to the popup Box
            popupBox.appendChild(imgheading)
        }
        //create the image
        let popupImage=document.createElement("img")
        //set image source
        popupImage.src=img.src

        //Add Image to popup Box
        popupBox.appendChild(popupImage)
        //append the popup box to body
        document.body.appendChild(popupBox)

        //create close span
        let closeButton=document.createElement("span")
        //create the close Button text
        let closeButtonText=document.createTextNode("x")
        //append text to close button
        closeButton.appendChild(closeButtonText)
        //ad class to close button
        closeButton.className='close-button'
        //add close button to the popup box
        popupBox.appendChild(closeButton)
    
    })
})
//close popup
document.addEventListener("click",function(e){
     if(e.target.className== 'close-button'){
        //remove the target popup
        e.target.parentNode.remove()
        //overlay remove
        document.querySelector(".popup-overlay").remove()
     }
});

//select all links

const allBullets=document.querySelectorAll(".nav-bullets .bullet")
const alllinks=document.querySelectorAll(".links a")
function scrollTOsomewhere(elements){

    elements.forEach(ele=>{
        ele.addEventListener("click",(e)=>{
            e.preventDefault
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            })
        })
    })
}
scrollTOsomewhere(allBullets)
scrollTOsomewhere(alllinks)

// Handle Active State
function handleactive(ev)
{
    //Remove Active Class From All childern
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active")
})
//add active class on self 
ev.target.classList.add("active");

}


let bulletSpan=document.querySelectorAll(".bullets-option span")
let bulletsContainer=document.querySelector(".nav-bullets")
let bulletLocalItem=localStorage.getItem("bullets_option")
if(bulletLocalItem !==null)
{
    bulletSpan.forEach(span=>{
        span.classList.remove("active")
    })    
    if(bulletLocalItem==='block'){
        bulletsContainer.style.display='block'
        document.querySelector(".bullets-option .yes").classList.add("active")
    }
    else{
        bulletsContainer.style.display='none'
        document.querySelector(".bullets-option .no").classList.add("active")
    }
}
bulletSpan.forEach(span=>{
    span.addEventListener("click",(e)=>{
        if(span.dataset.display==='show')
        {
            bulletsContainer.style.display='block'
            localStorage.setItem("bullets_option",'block')

        }
        else{
             bulletsContainer.style.display='none'
             localStorage.setItem("bullets_option",'none')
        }
        handleactive(e)
    })
})


//Reset button
document.querySelector(".reset-option").onclick=function(){
    localStorage.clear();
    // localStorage.removeItem("color_option")
    // localStorage.removeItem("background_option")
    // localStorage.removeItem("bullets_option")
    //reload window
    window.location.reload();



}


//Toggle menu
let toggleBtn=document.querySelector(".toggle-menu")
let links=document.querySelector(".links")
toggleBtn.onclick=function(e){
    //stop propagation
    e.stopPropagation()
    //Toggle Class "menu-active" on Button
    this.classList.toggle("menu-active")
    //Toggle Class "open" on Links
    links.classList.toggle("open")

}

//click anywhere Outside Menu and toggle button
document.addEventListener("click",(e)=>{
if(e.target !==toggleBtn  && e.target !== links)
{
    //check if menu is open
    if( links.classList.contains("open")){
         //Toggle Class "menu-active" on Button
   toggleBtn.classList.toggle("menu-active")
    //Toggle Class "open" on Links
     links.classList.toggle("open")
       
    }

}

})
// stop propagation menu
links.onclick=function(e){
    e.stopPropagation()
}