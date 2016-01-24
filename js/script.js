$(document).ready(function(){
  $("#accordian p:not(:first)").hide();
  $("#accordian h4").click(function(){
    $(this).next().slideToggle(1000)
          .siblings("p:visible").slideUp(1000);
  });
});