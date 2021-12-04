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
    popUp.style.display='block';

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