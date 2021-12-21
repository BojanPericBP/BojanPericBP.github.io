var popUp = document.getElementById('popUp-Id2');

window.onclick = function(event) //kad se klikne u prazno, da nestane popUp
{
    if (event.target == popUp) 
    {
        popUp.style.display = "none";
        // closePopUpStudent();
    }
}

function closePopUpStudent() 
{
    popUp.style.display='none';

    var searchEles = document.getElementsByClassName("input_studenta");
    for (var i = 0; i < searchEles.length; i++) {
        searchEles[i].value = ""
    }
}

function showPopUpStudent() 
{
    popUp.style.display='flex';

    var select = document.getElementsByClassName("dan");

    for (i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        select[0].appendChild(option);
    }

    var select = document.getElementsByClassName("mjesec");

    for (i = 1; i <= 12; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        select[0].appendChild(option);
    }

    var select = document.getElementsByClassName("godina");
    var today = new Date();
    var year = today.getFullYear();

    for (i = 1940; i <= year; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        select[0].appendChild(option);
    }
}

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

setInputFilter(document.getElementById("input_br_tel"), function(value) {
    return /^\d*$/.test(value); });
setInputFilter(document.getElementById("input_indeks"), function(value) {
    return /^-?\d*[/]?\d*$/.test(value); });
setInputFilter(document.getElementById("input_jmbg"), function(value) {
    return /^\d*$/.test(value); });