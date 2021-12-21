function myFunction() 
{
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("topnav_container");
  
  if (x.className === "topnav") 
  {
    x.className += " responsive";
    x.style.height = "auto";
    y.style.height = "auto";

  } 
  else 
  {
    x.className = "topnav";
    x.style.height = "auto";
    y.style.height = "65px";
  }
}

window.onscroll = function() { myFunctionScrool() };

var navbar = document.getElementById("navbar-custom");
var sadrzaj = document.getElementById("sadrzaj");

var sticky = navbar.offsetTop;
// alert(sticky);

function myFunctionScrool() 
{
  if (window.pageYOffset > sticky) 
  {
    sadrzaj.style.marginTop = "70px";
    navbar.classList.add("sticky");
  } 
  else 
  {
    sadrzaj.style.marginTop = "0px";
    navbar.classList.remove("sticky");
  }
}

function show_lista(lista_cega) {
  remove_container_top();

  var x = document.getElementById("container_spisak");

  var x_chil = (x.children)[0].children;
  x_chil = (x_chil)[0].children;
  x_chil[0].innerHTML = lista_cega

  if (x.style.display == "") {
      x.style.display = "block";
  }

  var container = document.getElementById("footer-clean");
  container.style.bottom = "0";

  // remove_scroling();
  remove_everything_except("container_spisak");
}

function show_lista_csk() {
  show_lista("Spisak članova stručne komisije");
}

function show_lista_studenata() {
  show_lista("Spisak studenata");
}

function show_lista_kompanija() {
  show_lista("Spisak kompanija");
}

function show_lista_sm() {
  show_lista("Spisak stručnih mentora");
}

function show_container_top() {
  var top = document.getElementById("container_top");
  if (top.style.display == "none") {
      top.style.display = "flex";
  }
}

function remove_container_top() {
  var top = document.getElementById("container_top");
  // alert(top.style.display);
  if (top.style.display === "") {
      top.style.display = "none";
  }
}

// function show_profil() {
//   remove_container_top();

//   var x = document.getElementById("container_profil");

//   if (x.style.display == "") {
//       x.style.display = "block";
//   }

//   var container = document.getElementById("footer-clean");
//   container.style.bottom = "unset"

  // var com = document.getElementById("center_kreiraj_studenta");
  // com.style.height = "0px";

//   remove_everything_except("container_profil");
// }

const forRemoving = ["container_spisak"];

function remove_everything_except(dontRemove) {
    for (i = 0; i < forRemoving.length; i++) {
      if (forRemoving[i] != dontRemove) {
        if(!document.getElementById(forRemoving[i])){
          alert(forRemoving[i]);
        }
            document.getElementById(forRemoving[i]).style.display = "";
        }
    }
}