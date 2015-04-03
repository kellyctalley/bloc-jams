$(document).ready(function() {
  $(".hero-content h3").click(function() {
    var subText = $(this).text();
    $(this).text(subText + "!");
  });

  var onHoverAction = function(event) {
    console.log("Hover action triggered");
    $(this).animate({"margin-top": "10px"});
  };

  var offHoverAction = function(event) {
    console.log('Off-hover action triggered');
    $(this).animate({"margin-top": "0px"});
  };

  $(".selling-points .point").hover(onHoverAction, offHoverAction);

  var hoverh3 = function(event) {
    $(this).css({"color": "#aaa"});
  };

  var offHoverh3 = function(event) {
    $(this).css({"color": "#fff"});
  };

  $(".hero-content h3").hover(hoverh3, offHoverh3);

  $(".point p").click(function() {
    $(this).css({"font-size": "18px"});
  });

});