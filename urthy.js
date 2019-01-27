$(document).ready(function() {
  // var myElement = $(".urthy");
  // $(".urthy").on("scroll",function() {
  //   var st = $(this).scrollTop();
  //   myElement.css ({
  //     "opacity": 1 - st / 200
  //   });
  // });

  $(window).scroll(function() {
    console.log(`Scroll position is: ${$(window).scrollTop()}`);
    if ($(window).scrollTop() >= 2050) {
      $(".urthy").fadeOut();
    } else {
      $(".urthy").fadeIn();
    }

    if ($(window).scrollTop() >= 2050) {
      $("#introDescription").fadeOut();
    } else {
      $("#introDescription").fadeIn();
    }

    if ($(window).scrollTop() >= 2450) {
      $(".urthybw").fadeOut();
    } else {
      $(".urthybw").fadeIn();
    }

      if ($(window).scrollTop() >= 2850) {
      $(".frame").fadeOut();
    } else {
      $(".frame").fadeIn();
    }

    if ($(window).scrollTop() >= 2450) {
      $("#frameDescription").fadeIn();
    } else {
      $("#frameDescription").fadeOut();
    }

    if ($(window).scrollTop() >= 3250) {
      $(".pots").fadeOut();
    } else {
      $(".pots").fadeIn();
    }

    if ($(window).scrollTop() >= 2850) {
      $("#potsDescription").fadeIn();
    } else {
      $("#potsDescription").fadeOut();
    }

    if ($(window).scrollTop() >= 3650) {
      $(".grinder").fadeOut();
    } else {
      $(".grinder").fadeIn();
    }

     if ($(window).scrollTop() >= 3250) {
      $("#grinderDescription").fadeIn();
    } else {
      $("#grinderDescription").fadeOut();
    }

    if ($(window).scrollTop() >= 4050) {
      $(".helper").fadeOut();
    } else {
      $("helper").fadeIn();
    }

     if ($(window).scrollTop() >= 3650) {
      $("#helperDescription").fadeIn();
    } else {
      $("#helperDescription").fadeOut();
    }

    if ($(window).scrollTop() >= 4450) {
      $(".storage").fadeOut();
    } else {
      $(".storage").fadeIn();
    }

     if ($(window).scrollTop() >= 4050) {
      $("#storageDescription").fadeIn();
    } else {
      $("#storageDescription").fadeOut();
    }

  });

});


//try JS switch property










