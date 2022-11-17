window.addEventListener("load", function (e) {
  // header navbar menu toggle
  $("header .activeBars").click(function () {
    $("header .activeMenuBars").slideToggle(1000);
  });
})
/// main videoPlayer playing video

  $(".video .fa-play").click(function () {
    document.querySelector(".videoPlayer video").play();
    $(".video .videoPlayer").addClass("active");
    $(this).fadeOut();
  });

  $(".video .videoPlayer").mouseover(function () {
    if ($(this).hasClass("active")) {
      $(".video .fa-pause").fadeIn(); // block
      $(".video .fa-pause").css("display", "flex");
    }
  });

  $(".video .videoPlayer").mouseout(function () {
    $(".video .fa-pause").fadeOut();
  });

  $(".video .fa-pause").click(function () {
    document.querySelector(".videoPlayer video").pause();
    $(".video .fa-play").fadeIn();
    $(".video .videoPlayer").removeClass("active");
  });