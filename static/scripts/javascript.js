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

 var brand_Container = $('.page-sidebar .container');
 var brand_Height = brand_Container.outerHeight();
 var brand = $('nav h1');
 var header_Height = $('header').outerHeight();
 var header_h1 = $('header h1');
 var header_h2 = $('header h2');
 var winWidth = $('body').outerWidth() * .80;

 header_h2.waypoint({
  handler: function(direction) {

   if (direction == 'down') {
    header_h1.css({'display': 'none'});
    header_h2.css({'display': 'none'});
    brand.css({'display': 'flex', 'position': 'fixed', 'color': '#fff', 'padding-top': '5vh', 'right': winWidth});
    console.log("Yes I'm triggering");

   } else {
    console.log('here we are');
    header_h1.css({'display': 'initial'});
    header_h2.css({'display': 'flex'});
    brand.css({'display': 'none'});
   }
  }
 });
});

$('a.anchor').click(function(event){
 var windowHeight = $(window).height();   
 event.preventDefault();
 $('html,body').animate({
  scrollTop: $(this.hash).offset().top + -(.05 * windowHeight)}, 500);
 });


$(function() {
 var sections = $('section');

 for (var s = 0; i < sections.length; i++) {
  new Waypoint({
   element: sections[s],
   handler: function() {
    console.log('we did make it here');
    $(this).css({'border': '1px solid red'});
    }
   })
  }
 })