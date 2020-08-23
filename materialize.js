$(document).ready(function(){
  
  $('.sidenav').sidenav();
  
  $('.carousel').carousel({
    fullWidth: true,
    indicators:true
  });
  

  setInterval(function(){
    $('.carousel').carousel('next')
  },3000);

  $('.scrollspy').scrollSpy({
    scrollOffset:65
  });
  $('.parallax').parallax();
  $('#pCarousel').carousel();


  $(window).scroll(function(){
    
    if($(this).scrollTop()> 40){
      $('#arrowUp').fadeIn();
    }
    else{
      $('#arrowUp').fadeOut();
    }
     
    
  });
  $('#arrowUp').click(function(){
    
    $('html body').animate({
      scrollTop:0
    },800)
    
  });

  
  
  


});








  
