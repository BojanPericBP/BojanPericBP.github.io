function myFunction() 
{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") 
  {
    x.className += " responsive";
    x.style.height = "auto";
  } 
  else 
  {
    x.className = "topnav";
    x.style.height = "81px";
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