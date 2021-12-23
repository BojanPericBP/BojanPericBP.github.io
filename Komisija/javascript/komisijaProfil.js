function myFunction() // za otvaranje nav-menija na 3 crtice
{
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