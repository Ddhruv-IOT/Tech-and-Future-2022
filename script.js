var timeleft = 4;

var downloadTimer = setInterval(function() {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
    }
    document.getElementById("l2").innerHTML = timeleft;
    timeleft -= 1;
}, 1000);


window.onload = function() {
    document.getElementById("London").style.display = "block";
    document.getElementById("l1").style.display = "none";
    document.getElementById("l2").style.display = "none";
    document.getElementById("l3").style.display = "none";
}

var image_data = ["1.png", "2.png", "3.png", "4.png"]

var index = 0;

setInterval(function image_changer() {
    if (index === image_data.length) {
        index = 0;
    }

    document.getElementById('image').src = "assets/" + image_data[index];
    index = index + 1;
}, 2000);


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}