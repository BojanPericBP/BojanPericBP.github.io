var popUp = document.getElementById('popUp-Id');

window.onclick = function(event)
{
    if (event.target == popUp) 
    {
        popUp.style.display = "none";
    }
}

function closePopUp() 
{
    popUp.style.display='none';
}

function showPopUp() 
{
    popUp.style.display='block';
}

function apliciraj()
{
    // TODO implement
}