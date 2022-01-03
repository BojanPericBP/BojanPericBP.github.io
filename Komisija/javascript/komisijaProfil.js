function myFunction() // za otvaranje nav-menija na 3 crtice
{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var x = document.getElementById("dropdown-content-klasa-ID");
x.style.display = "none";

function profilDropdown() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"
  }
}

document.addEventListener('mouseup', function (e) {
  var dugme = document.getElementById("dropbtn-ID");
  if (!dugme.contains(e.target)) {
    x.style.display = 'none';
  }
});