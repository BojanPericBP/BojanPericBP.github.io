// (function () {
//     'use strict'

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')

//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//         .forEach(function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (!form.checkValidity()) {
//                     event.preventDefault()
//                     event.stopPropagation()
//                 }

//                 form.classList.add('was-validated')
//             }, false)
//         })
// })();



//JS KLIK UPRAZNO IZVAN POPUP-A
var popUp = document.getElementById('popUp-Id');

window.onclick = function(event)
{
    if (event.target == popUp) 
    {
        popUp.style.display = "none";
    }
}

//JS KLIK NA POTVRDU
function closePopUp() 
{
    if(document.forms[0].checkValidity())
    popUp.style.display='none';
}

//JS KLIK NA DUGME ZA ZATVARANJE
function forceClosePopUp() {

        popUp.style.display = 'none';
}

//JS ISKAKANJE POPUP*A
function showPopUp() 
{
   
    popUp.style.display='block';
}

//JS DODAVANJE MENTORA
function dodajMentora()
{
    
}