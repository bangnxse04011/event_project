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
    xhttp.open("GET", "https://ebcvietnam.com/events/" + language.trim() + "/" + event.trim());
    xhttp.send();
}

/**
 * Find news
 */
function find_all_new() {
    var language = $('#language').html();
    let str = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            data_news = JSON.parse(xhttp.responseText);
            for (var i = 1; i < data_news.length; i++) {
                str += "<div class='mu-contact-content'> <div class='row'> <div class='col-md-12'> <div class='mu-contact-right'> <div class='mu-contact-widget'> <h3> " + data_news[i]["title"] + " </h3> <p> " + data_news[i]["details"] + " </p> </div> </div> </div> </div> </div>";
            }
            $('#news').html(str);
        }
    }
    xhttp.open("GET", "https://ebcvietnam.com/news/" + language.trim());
    xhttp.send();
}
/**
 * 
 */
$(document).ready(function () {
    find_all_events("");
    find_all_new();
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