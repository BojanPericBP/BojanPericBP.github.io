var popUp = document.getElementById('popUp-Id');

window.onclick = function(event) //kad se klikne u prazno, da nestane popUp
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

function aplicirajZaPraksu()
{
    // TODO implement
}

function pogledajCV()
{
    // TODO implement
}