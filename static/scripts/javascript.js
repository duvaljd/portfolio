// Slideshow controls
var slideIndex = 1;
var z = document.getElementsByClassName("slideshow");

for (i = 0; i < z.length; i++) {
  z[i].setAttribute("this-slide", 1);
  showDivs(z[i].getAttribute("this-slide"), i);
}

function plusDivs(n, j) {
  slideIndex = parseInt(z[j].getAttribute("this-slide")[0]);
  showDivs(slideIndex += n, j);
}

function currentDiv(n, j) {
  showDivs(slideIndex = n, j);
}

function showDivs(n, j) {
  var i;
  var z = document.getElementsByClassName("slideshow")[j];
  var x = z.getElementsByClassName("slide");
  var dots = z.getElementsByClassName("dot");

  if (n > x.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  z.setAttribute("this-slide", slideIndex);

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  x[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
};


// Anchor links
function jump(elID) {
  var el = document.getElementById(elID);
  pos = el.style.position;
  top = el.style.top;

  el.style.position ='relative';
  el.style.top = '-15vh';
  el.scrollIntoView({behavior: 'smooth', block: 'start'});
  el.style.top = top;
  el.style.position = pos;
}

//Sticky navigation
$(function() {

 var bodynav_container = $('.nav-container');
 var bodynav = $('#body-nav');
 var topnav = $('#top-nav')
 var bodyh1 = $('#body-h1');
 var bodyh2 = $('#body-h2');
 var height = bodynav_container.outerHeight()

 bodynav.waypoint({
  handler: function(direction) {

   if (direction == 'down') {
    bodynav.css('display', 'none');
    bodyh1.css('display', 'none');
    bodyh2.css('display', 'none');
    topnav.css('display', 'flex');
    console.log("Yes I'm triggering");

   } else {
    console.log('here we are');
    topnav.css('display', 'none');
    bodynav_container.css('height', height);
    bodynav.css('display', 'flex');
    bodyh1.css('display', 'initial');
    bodyh2.css('display', 'initial');
   }
  }
 });
});

$(".section-anchor").click(function(event){
 var windowHeight = $(window).height();   
 event.preventDefault();
 $('html,body').animate({
  scrollTop: $(this.hash).offset().top + -(.15 * windowHeight)}, 500);
});