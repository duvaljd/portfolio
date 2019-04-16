//// STICKY NAVIGATION
function stickynav() {

 var navigation = $('nav');
 var trigger = $('header h1');

 trigger.waypoint(function(direction) {

   if (direction == 'down') {
    navigation.toggleClass('scrolled');

   } else {
    navigation.toggleClass('scrolled');
   }
    context: '.page-content'
  }, {
    context: '.page-content'
  });
};

//// ANCHOR LINKS
function jump() {
 $('a').on('click', function(event) {
  if (this.hash !== "") {
   event.preventDefault();
   var hash = this.hash.substring(1, this.hash.length);

   var el = document.getElementById(hash);
   pos = el.style.position;
   top = el.style.top;

   el.style.position ='relative';
   el.scrollIntoView({behavior: 'smooth', block: 'start'});
   el.style.top = top;
   el.style.position = pos;
  };
 });
};


//// HIGHLIGHT NAV ON SCROLL

// Helper functions
function getRelatedNavigation(id) {
 return $('a[href="#' + id +'"]')
};

// Open & highlight nav section
$('section').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);

 $(navlink).toggleClass('active', direction == 'down');
}, {
 offset: '25%',
 context: '.page-content'
});

// Highlight active section links
$('.content-block').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);

 $(navlink).toggleClass('active', direction == 'down');
}, {
 offset: '25%',
 context: '.page-content'
});

// Remove section highlight
$('.content-block').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);

 $(navlink).toggleClass('active', direction == 'up');
}, {
 offset: function() {
  return -$(this.element).height() + 100;
 },
 context: '.page-content'
});

// Remove nav highlight and close section
$('section').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);

 $(navlink).toggleClass('active', direction == 'up');
}, {
 offset: function() {
  return -$(this.element).height() + 100;
 },
 context: '.page-content'
});

//// SLIDESHOW
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

function showDivs(n, j) {
  var i;
  var z = document.getElementsByClassName("slideshow")[j];
  var x = z.getElementsByClassName("slide");
  var subs = z.getElementsByClassName("sub");

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

  for (i = 0; i < subs.length; i++) {
    subs[i].className = subs[i].className.replace(" active", "");
  }

  x[slideIndex - 1].style.display = "flex";
  subs[slideIndex - 1].className += " active";
}

function currentDiv(n, j) {
 showDivs(slideIndex = n, j);
 };

//// EXECUTE

// When document is ready
$(document).ready(function() {
 stickynav();
 jump();
 })


// When window is resized
$(window).resize(function() {
 stickynav();
 jump();
 })

// When window is zoomed
$(window).on('zoom', function() {
 stickynav();
 jump();
})