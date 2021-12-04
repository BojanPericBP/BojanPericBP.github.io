var popUp = document.getElementById('popUp-Id2');

window.onclick = function(event) //kad se klikne u prazno, da nestane popUp
{
    if (event.target == popUp) 
    {
        popUp.style.display = "none";
        // closePopUp();
    }
}

function closePopUp() 
{
    popUp.style.display='none';

    var searchEles = document.getElementsByClassName("input_csp");
    for (var i = 0; i < searchEles.length; i++) {
        searchEles[i].value = ""
    }
}

function showPopUp() 
{
    popUp.style.display='block';
}