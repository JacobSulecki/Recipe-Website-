//the dropdown menu for the recipes button in the header
document.getElementById("Recipies").addEventListener("click", openMenu);

function openMenu(){
    document.getElementById("dropdown").classList.toggle("active");
}

//displays time/date when button is clicked via alert function
function dateTime(){
    alert(document.getElementById('dateTime').innerHTML = Date())
}


//changing the "secret" message when onmouseover and changing back onmouseout
function mOver(obj){
    obj.innerHTML = "Gotcha, click the image to follow along with another recipe!";
}

function mOut(obj){
    obj.innerHTML = "Click HERE";
}