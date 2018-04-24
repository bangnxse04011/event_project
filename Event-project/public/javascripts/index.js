const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/**
 * Find all event
 */
function find_all_events(event) {
    $('.event_showroom ul').empty()
    if (event == null || event == '' || event == "") {
        event = 'Event';
    }
    var language = $('#language').html();
    var list_event;
    let str = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            data_events = JSON.parse(xhttp.responseText);
            for (var i = 0; i < data_events.length; i++) {
                str += "<li> <div class='media'> <div class='media-left'> <a href='/events-details/event/" + data_events[i].id + "'> <img class='media-object' src='/stylesheets/img/" + data_events[i]['path_img'] + "' alt='img'> </a> </div> <div class='media-body' style=' white-space: nowrap; overflow: hidden; text-overflow: ellipsis; '> <h4 class='media-heading'> <a href='/events-details/event/" + data_events[i].id + "'> <b>" + data_events[i]['title'] + "</b> </a> </h4> <span class='mu-menu-price'>" + numberWithCommas(data_events[i]['price']) + " VND</span> <p>" + data_events[i]['description'] + " (" + data_events[i]['fullName'] + ")</p> </div> </div> </a> </li>";
            }
            $('.event_showroom ul').html(str);
        }
    }
    xhttp.open("GET", "http://150.95.109.217/events/" + language.trim() + "/" + event.trim());
    xhttp.send();
}

$(document).ready(function () {
    find_all_events("");
    //-------------------------------------
    $('#events').click(function () {
        find_all_events('Events');
    });
    //-------------------------------------
    $('#exhibition').click(function () {
        find_all_events('Exhibition');
    });
    //-------------------------------------
    $('#showroom').click(function () {
        find_all_events('Showroom');
    });
});
