var popUp = document.getElementById('popUp-Id2');

window.onclick = function(event) //kad se klikne u prazno, da nestane popUp
{
    if (event.target == popUp) 
    {
        popUp.style.display = "none";
        // closePopUpKompanija();
    }
}

function closePopUpStudent() 
{
    popUp.style.display='none';

    var searchEles = document.getElementsByClassName("input_student");
    for (var i = 0; i < searchEles.length; i++) {
        searchEles[i].value = ""
    }
}

function showPopUpStudent() 
{
    popUp.style.display='flex';

}