function myFunction() 
{
  //document.getElementById("prezimeKomisije").innerHTML = "noName@mail.com";
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") 
  {
    x.className += " responsive";
  } 
  else 
  {
    x.className = "topnav";
  }
}

window.onscroll = function() { myFunctionScrool() };

var navbar = document.getElementById("navbar-custom");

var sticky = navbar.offsetTop;

function myFunctionScrool() 
{
  if (window.pageYOffset >= sticky) 
  {
    navbar.classList.add("sticky")
  } 
  else 
  {
    navbar.classList.remove("sticky");
  }
}