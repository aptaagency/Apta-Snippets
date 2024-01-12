// Check if an element is in view
function isInView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return elemTop <= docViewBottom && elemBottom >= docViewTop;
}

// Trigger the animation for all elements in view
function animateElementsInView() {
  $("[ap-spin-element]").each(function () {
    var $this = $(this);
    if (isInView($this) && !$this.hasClass("animated")) {
      $this.addClass("animated");
      var spinElementValue = parseInt($this.attr("ap-spin-element"));
      $({ Counter: 0 }).animate(
        { Counter: spinElementValue },
        {
          duration: 4000,
          easing: "swing",
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        }
      );
    }
  });
}

// Trigger the animation on scroll and resize events
$(window).on("scroll resize", function () {
  animateElementsInView();
});

// Trigger the animation on page load
$(document).ready(function () {
  animateElementsInView();
});
