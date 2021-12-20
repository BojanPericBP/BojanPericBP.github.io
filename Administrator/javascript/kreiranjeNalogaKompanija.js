var popUp = document.getElementById('popUp-Id2');

window.onclick = function(event) //kad se klikne u prazno, da nestane popUp
{
    if (event.target == popUp) 
    {
        popUp.style.display = "none";
        // closePopUpKompanija();
    }
}

function closePopUpKompanija() 
{
    popUp.style.display='none';

    var searchEles = document.getElementsByClassName("input_firmu");
    for (var i = 0; i < searchEles.length; i++) {
        searchEles[i].value = ""
    }
}

function showPopUpKompanija() 
{
    popUp.style.display='flex';

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