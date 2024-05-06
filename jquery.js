 $().ready(function() {
   $(".sub-btn").click(function () {

     $(this).next(".sub-menu").slideToggle()
   $(this).find(".fa-arrow-right").toggleClass("rotate")
   })

   $(".menu-btn").click(function(){
     $(".side-bar").addClass("active")
   })

   $(".close-btn").click(function(){
     $(".side-bar").removeClass("active")
   })
   $("#name").css("color", "red").slideUp(2000).slideDown(2000)
 })

