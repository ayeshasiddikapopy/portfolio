//==============navbar========
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling>10){
      $(".addmenu").addClass("nav_items")
    }
    else{
      $(".addmenu").removeClass("nav_items")
    }
  }) ;


//===========wow============
  new WOW().init();



//=========down to up on click=======
$(window).scroll(function(){
    var srcolling=$(this).scrollTop();
    if(srcolling>10){
      $(".up_down i").fadeIn(500);
    }
    else{
      $(".up_down i").fadeOut(500);
    }
  })
  $(".up_down i").on('click',function(){
    $("html, body").animate({
      scrollTop:0
    } ,2000)
  })


//=======type js==========
  var typed = new Typed('.type', {
    strings: ['frontend developer','web designer', 'freelancer'],
    smartBackspace: true,
    typeSpeed: 100, 
    loop:true
  });
  
//===========preloader==========
$(window).on('load', function(){
  $(".preloader").delay(1000).fadeOut(500)
})
document.querySelector('body').addEventListener('mousemove', eyeball);
    function eyeball(){
        var eye = document.querySelectorAll('.eye');
        eye.forEach(function(eye){
            let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
            let radian = Math.atan2(event.pageX - x, event.pageY - y);
            let rot = (radian * (180 / Math.PI) * -1) + 270;
            eye.style.transform = "rotate("+ rot +"deg)";
        })

    }


 //cursor styling
 let mouse =document.querySelector(".cursor");
 let navLink =document.querySelectorAll(".nav_inner a");
 
 window.addEventListener('mousemove',cursor);
 function cursor(e){
     mouse.style.top=e.pageY+"px";
     mouse.style.left=e.pageX+"px";
 }
 navLink.forEach( link => {
     link.addEventListener('mouseover',() =>{
         mouse.classList.add('link-grow')
         link.classList.add('hovered')
     });
     link.addEventListener('mouseleave',() =>{
         mouse.classList.remove('link-grow')
         link.classList.remove('hovered')
     });
 });
 //scrolling
let progress = document.getElementById('progresbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){

    let progressHeight =(window.pageYOffset / totalHeight)*100;
    progress.style.height = progressHeight + "%";
}
 //team 
 $('.slick_team').slick({
  slidesToShow: 3,
  slidesToScroll: 1, 
  prevArrow:".left",
  nextArrow:".right",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
       
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
       
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
     
      }
    },
  ]
});

//progress
$('#jq').LineProgressbar({
  percentage:70,
  radius: '3px',
  height: '5px',
  fillBackgroundColor: '#e74818'
  });
  $('#html').LineProgressbar({
  percentage:80,
  radius: '3px',
  height: '5px',
  fillBackgroundColor: '#e74818'
  });
  $('#css').LineProgressbar({
  percentage:60,
  radius: '3px',
  height: '5px',
  fillBackgroundColor: '#1ecbe1'
  });
  $('#js').LineProgressbar({
    percentage:40,
    radius: '3px',
    height: '5px',
    });
    $('#Bp').LineProgressbar({
    percentage:65,
    radius: '3px',
    height: '5px',
    fillBackgroundColor: '#ede812'
    });
    $('#ss').LineProgressbar({
    percentage:10,
    radius: '3px',
    height: '5px',
    fillBackgroundColor: '#E0C341'
    });
    
  //mixitup
  var mixer = mixitup('.work-item');