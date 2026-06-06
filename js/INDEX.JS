
/**
   * Animation on scroll function and init
   */


function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      twice: true,
      mirror: false,
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

/*========== mobile toggle menue start from here ================*/

 

  var typed = new Typed (".text", {
    strings:["early childhood school student" , "elementary school student" , "middle school student" , "high school student"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});



