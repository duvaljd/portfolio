//// STICKY NAVIGATION
$(document).ready(function() {
 stickynav();
 jump();
 })

$(window).resize(function() {
 stickynav();
 jump();
})

function stickynav() {

 var brand_Height = adjustBrandHeight();
 var brand = $('nav h1');
 var header_Height = adjustHeaderHeight;
 var header_h2 = $('header h2');
 var bodyWidth = adjustWidth;

 function adjustBrandHeight() {
  newBrandHeight = $('.page-sidebar .container').outerHeight();
  return newBrandHeight;
 }

 function adjustHeaderHeight() {
  newHeaderHeight = $('header').outerHeight();
  return newHeaderHeight;
 }

 function adjustWidth() {
  newBodyWidth = $('body').outerWidth() * .75;
  return newBodyWidth;
 }

 header_h2.waypoint(function(direction) {

   if (direction == 'down') {
    brand.css({'display': 'flex', 'position': 'fixed', 'color': '#fff', 'padding-top': '5vh', 'right': bodyWidth, 'line-height': '4rem'});

   } else {

    brand.css({'display': 'none'});
   }
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
   el.style.top = '-5vh';
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

function getRelatedSubLinks(id) {
 var navlink = getRelatedNavigation(id);
 var sublinks = navlink.parent('li').siblings().find('a[href*="#' + id +'"]');
 return sublinks
}

// Open & highlight nav section
$('section').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);
 var sublinks = getRelatedSubLinks(this.element.id);

 $(navlink).parent('li').toggleClass('active', direction == 'down');
 $(sublinks).toggleClass('visible', direction == 'down');
}, {
 offset: '50%'
});

// Highlight active section links
$('.content-block').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);
 $(navlink).toggleClass('active', direction == 'down');
}, {
 offset: '50%'
});

// Remove section highlight
$('.content-block').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);
 $(navlink).toggleClass('active', direction == 'up');
}, {
 offset: function() {
  return -$(this.element).height() + 100;
 }
});

// Remove nav highlight and close section
$('section').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);
 var sublinks = getRelatedSubLinks(this.element.id);

 $(navlink).parent('li').toggleClass('active', direction == 'up');
 $(sublinks).toggleClass('visible', direction == 'up');
}, {
 offset: function() {
  return -$(this.element).height() + 100;
 }
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