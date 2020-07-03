       
$(document).ready(function () {

  $("#food-for-the-heart, #mala, #resurgence, #van-cares, #chotto-motto, #the-ruse, #brine, #death-by-xoko, #decoded").hover(
    function () {
      // $(".bg").attr("src","assets/img/mala.jpg");
      $(".bg").css("transform", 'scale(1.0)');
      $(".bg").css("opacity", '100%');
      $(".navbar").css("opacity", '10%');
      $("footer").css("opacity", '10%');
      $(".portfolio-nav").css("opacity", '20%');

    },
    function () {
      // $(".bg").attr("src","assets/img/white.jpg");
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

  $("#van-cares").hover(
    function () {
      $(".bg").attr("src","assets/img/van-cares.jpg");
    },
    function () {
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );

  $("#chotto-motto").hover(
    function () {
      $(".bg").attr("src","assets/img/chotto-motto.jpg");
    },
    function () {
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );

  $("#the-ruse").hover(
    function () {
      $(".bg").attr("src","assets/img/the-ruse.jpg");
    },
    function () {
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );

  $("#brine").hover(
    function () {
      $(".bg").attr("src","assets/img/brine.jpg");
    },
    function () {
      $(".bg").attr("src","assets/img/white.jpg");
      }
  );
});