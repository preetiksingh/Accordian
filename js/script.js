$(document).ready(function(){
  $("#accordian p:not(:first)").hide();
  $("#accordian h4").click(function(){
    $(this).next().slideToggle(2000)
          .siblings("p:visible").slideUp(2000);
  });
});