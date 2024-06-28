/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn=document.getElementById('myNavmenu')
  if(menuBtn.className==='nav-menu'){
    menuBtn.className+="responsive"
  }else{
    menuBtn.className='nav-menu'
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    
window.onscroll=function(){
  headershadow()
}
function headershadow(){
  const navheader=document.getElementById('header')
  if(document.body.scrollTop>50 ||document.documentElement.scrollTop>50){
    navheader.style.boxShadow='0 1px 6px rgba(0,0,0,0.1)'
    navheader.style.height='70px'
    navheader.style.lineHeight='70px'
    }else{
    navheader.style.boxShadow='none'
    navheader.style.height='90px'
    navheader.style.lineHeight='90px'

  }
}


/* ----- TYPING EFFECT ----- */
   var typingeffect= new Typed(".typedText",{
    strings:["Devloper","Proggramer","Techie"],
    loop:true,
    typeSpeed:100,
    backSpeed:60,
    backDelay:2000


   })

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:'2000',
    reset:true
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.fetured-image',{delay: 200})

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  
  sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */


  /* -- ABOUT INFO & CONTACT INFO -- */
  
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})


/* ----- SWIPER JS ----- */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      640: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 40,
      },
      1024: {
          slidesPerView: 2,
          spaceBetween: 50,
      },
  },
});
/* ----- CHANGE ACTIVE LINK ----- */
  
  
   
