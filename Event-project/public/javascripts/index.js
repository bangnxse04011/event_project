$(document).ready(function () {
    var list_event;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

        }
    }
    xhttp.open("GET", "http://localhost:3000/events/vi/event");
    xhttp.send();
});