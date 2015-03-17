
$(document).ready(function(){
   
    var resizeTimer; // Set resizeTimer to empty so it resets on page load

    function resizeFunction() {
        // Stuff that should happen on resize

        //.parallax(xPosition, adjuster, inertia, outerHeight) options:
    //xPosition - Horizontal position of the element
    //adjuster - y position to start from
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
   
   $('.bg3').parallax("50%", 1001, 0.2, true);
   $('.bg2').parallax("50%", 1001, 0.5, true);
    };
    resizeFunction();
    // On resize, run the function and reset the timeout
    // 250 is the delay in milliseconds. Change as you see fit.
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeFunction, 500);
    });
    
  })





           

