  /*function changeImage {
    var scrollPos = window.scrollY;
    var urthy = document.getElementsByTagName(".urthy");
    urthy[0].style.fadeOut = `${scrollPos}px`;
  }*/

  /*$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.urthybw').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return 1 - (elementHeight - scrollTop) / elementHeight;
    }
  });
});*/


/*var urthy = $('urthy');
var range = 200;

$(window).on('scroll', function () {
  
  var scrollTop = $(this).scrollTop(),
      height = urthy.outerHeight(),
      offset = height / 2,
      calc = 0 + (scrollTop - offset + range) / range;

  urthy.css({ 'opacity': calc });

  if (calc > '0') {
    urthy.css({ 'opacity': 0 });
  } else if ( calc < '1' ) {
    urthy.css({ 'opacity': 1 });
  }
  
});*/

/*$(window).scroll(function(){
    $(".test").css("opacity", 1 - $(window).scrollTop() / 250);
  });*/

/*// Find out mouse position
// Set background color based on returned values
var tempX = 0;
var tempY = 0;
window.onload = function() {
  // Find out mouse position
  // Set background color based on returned values
  var tempX = 0;
  var tempY = 0;
  // get body element
  var body = document.getElementsByTagName("body");

function getMouseXY(e) {
  tempX = e.pageX;
  tempY = e.pageY;
  function getMouseXY(e) {
    tempX = e.pageX;
    tempY = e.pageY;


  if (tempX < 0){tempX = 0;}
  if (tempY < 0){tempY = 0;}
    if (tempX < 0){tempX = 0;}
    if (tempY < 0){tempY = 0;}

  // Scale mouseposition to rgb value range
  tempX = Math.floor(scale(tempX, 0, window.innerWidth, 0, 255));
  tempY = Math.floor(scale(tempY, 0, window.innerHeight, 0, 255));
    // Scale mouseposition to rgb value range
    tempX = Math.floor(scale(tempX, 0, window.innerWidth, 0, 255));
    tempY = Math.floor(scale(tempY, 0, window.innerHeight, 0, 255));

  // get body element
  var body = document.getElementsByTagName("body");
  // change background style of body element
  // body[0].style.backgroundColor = "rgb(2, 2, 2)";
  // body[0].style.backgroundColor = "rgb(" + tempX + ", " + tempY + ", 50)";
  body[0].style.backgroundColor = `rgb(${tempX}, ${tempY}, 50)`;

    // change background style of body element
    // body[0].style.backgroundColor = "rgb(2, 2, 2)";
    // body[0].style.backgroundColor = "rgb(" + tempX + ", " + tempY + ", 50)";
    body[0].style.backgroundColor = `rgb(${tempX}, ${tempY}, 50)`;

  console.log("X coordinate: " + tempX);
  console.log("Y coordinate: " + tempY);
  //console.log(body);

  return true;
}
    console.log("X coordinate: " + tempX);
    console.log("Y coordinate: " + tempY);
    //console.log(body);

function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
// }
    return true;
  }

  // Map one range of numbers to another range or numbers
  function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

document.addEventListener("mousemove", getMouseXY);
  // Find out scroll position
  // Text page element
  // Change font-size of page element based on scroll position

  function changeImage(e) {
    var scrollPos = window.scrollY;
    var header = document.getElementsByTagName(".urthy");
    header[0].style.fontSize = `${scrollPos}px`;
  }

  function addHeader() {
    // create the header element
    var node = document.createElement(".urthy");
    // create the text for the header element
    var nodeText = document.createTextNode("Urthy");
    // put the text in the header element
    node.appendChild(nodeText);
    body[0].appendChild(node);
  }

  // Track the movement of the mouse on the document object and
  document.addEventListener("mousemove", getMouseXY);
  // Track scroll position on page
  document.addEventListener("scroll", changeFontSize);

  addHeader();

}*/


console.log('hello');

window.addEventListener("scroll", myFunction);

function myFunction(e) {
  console.log("myFunction");
  console.log(window.scrollY);
}

var y = window.scrollY

y(function() {
  var scrollTop = $(this).scrollTop();

  '.urthy'.css({
    opacity: function() {
      var elementHeight = this.height();
      return 1 - (elementHeight - scrollTop) / elementHeight;
    }
  });
});


// if (window.scrollY == 200) {
//   ".urthy".css.opacity = 0;
// }


















