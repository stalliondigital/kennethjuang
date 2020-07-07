       
$(document).ready(function () {

  $("#food-for-the-heart, #mala, #resurgence, #van-cares, #esports, #airpods, #safe, #parkeasy").hover(
    function () {
      $(".bg").css("transform", 'scale(1.0)');
      $(".bg").css("opacity", '100%');
      $(".navbar").css("opacity", '10%');
      $("footer").css("opacity", '10%');
      $(".portfolio-nav").css("opacity", '20%');

    },
    function () {
      $(".bg").css("transform", 'scale(1.1)');
      $(".bg").css("opacity", '0%');
      $(".navbar").css("opacity", '100%');
      $("footer").css("opacity", '100%');
      $(".portfolio-nav").css("opacity", '100%');

    }
  );
    
  $("#food-for-the-heart").hover(
    function () {
      $(".bg").attr("src","assets/img/food-for-the-heart.jpg");
    },
    function () {
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );

  $("#mala").hover(
    function () {
      $(".bg").attr("src","assets/img/mala.jpg");
    },
    function () {
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );

  $("#resurgence").hover(
    function () {
      $(".bg").attr("src","assets/img/resurgence.jpg");
    },
    function () {
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );

  $("#esports").hover(
    function () {
      $(".bg").attr("src","assets/img/esports.jpg");
    },
    function () {
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );

  $("#airpods").hover(
    function () {
      $(".bg").attr("src","assets/img/airpods.jpg");
    },
    function () {
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );

  $("#van-cares").hover(
    function () {
      // Change "assets/img/white.jpg" to 
      // "assets/img/vancares.jpg"
      $(".bg").attr("src","assets/img/white.jpg");
    },
    function () {
      // Do not change asset url
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );

  $("#safe").hover(
    function () {
      // Change "assets/img/white.jpg" to 
      // "assets/img/safebackgroundimage.jpg"
      $(".bg").attr("src","assets/img/white.jpg");
    },
    function () {
      // Do not change asset url
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );

  $("#parkeasy").hover(
    function () {
      $(".bg").attr("src","assets/img/parkeasy/onboarding_cover.jpg");
    },
    function () {
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );

});