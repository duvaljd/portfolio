//// STICKY NAVIGATION (waypoints.js)
function updateNav() {

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

//// HIGHLIGHT LINKS (waypoints.js)

/// Helper Function
function getRelatedNavigation(id) {
 return $('a[href="#' + id +'"]')
};

/// Main Navigation
// Add main navigation highlight
$('section').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);

 $(navlink).toggleClass('active', direction == 'down');
 }, {
 offset: '25%',
 context: '.page-content'
});

// Remove main navigation highlight
$('section').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);

 $(navlink).toggleClass('active', direction == 'up');
 }, {
 offset: function() {
  return -$(this.element).height() + 100;
 },
 context: '.page-content'
});

/// Section Navigation
// Add section navigation highlight
$('.slide').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);

 $(navlink).toggleClass('active', direction == 'right');
 }, {
 offset: '25%',
 context: '.section-content',
 horizontal: true,
});

// Remove section navigation highlight
$('.slide').waypoint(function(direction) {
 var navlink = getRelatedNavigation(this.element.id);

 $(navlink).toggleClass('active', direction == 'left');
 }, {
 offset: function() {
  return -$(this.element).width() + 100;
 },
 context: '.section-content',
 horizontal: true,
});


fixHeight = function() {
 var div = $
}

//// EXECUTE

/// When document is ready
$(document).ready(function() {
 updateNav();
 });

/// When window is resized
$(window).resize(function() {
 updateNav();
 });

/// When window is zoomed
$(window).on('zoom', function() {
 updateNav();
 });