
function setAttribute(elem, attr){
  Object.keys(attr).forEach(key => elem.setAttribute(key, attr[key]));
}




function loadImages(picLinks){
  //var size = picLinks.length(); --only have two pic right now
  console.log(picLinks);
  var link = null;
 for(i=0; i<6; i++){
    link = picLinks[i];   
    var div = document.createElement("div");
    setAttribute(div, {"class": "col-sm-6"});
    var a = document.createElement("a");
    setAttribute(a, {href: link, target: "_blank"})
    var img = document.createElement("img");
    setAttribute(img, {class: "img-responsive", src: link, alt: "WWU Dashboards"});
    a.appendChild(img);
    div.appendChild(a)
    var pic = document.getElementById("images")
    pic.appendChild(div);
  }
}


$(document).ready(function(){
  var picLinks = ["http://i.imgur.com/UZqEIOB.png", "http://cdn.wallpapersafari.com/40/14/Gutken.jpg", "http://cdn.wallpapersafari.com/40/14/Gutken.jpg",
                  "http://cdn.wallpapersafari.com/40/14/Gutken.jpg","http://cdn.wallpapersafari.com/40/14/Gutken.jpg","http://cdn.wallpapersafari.com/40/14/Gutken.jpg",
                  ];
  loadImages(picLinks);


  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
