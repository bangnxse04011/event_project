$(document).ready(function () {
    try {
        var language = $('#language').html();
        var list_event;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                list_event = xhttp.responseText;
                var data = JSON.parse(list_event);
                let str = "";
                for (var i = 0; i < data.length; i++) {
                    str += '<a href="/details/' + data[i]['id'] + '"> <div class="mu-single-gallery col-md-4"> <div class="mu-single-gallery-item"> <figure class="mu-single-gallery-img"> <img class="fixSizeImg" alt="img" src="/stylesheets/img/' + data[i]['path_img'] + '"> <div class="mu-single-gallery-info"> <div class="titleonhover"><h2>' + data[i]['title'] + '</h2> <div class="perTitle" >' + data[i]['address'] + '</div> <div class="perTitle">' + data[i]['description'] + '</div> </div> </div> </figure> </div> </div> </a>';
                }
                $('#gallery').html(str);
            }
        }
        xhttp.open("GET", "http://localhost:3000/gallery/" + language.trim());
        xhttp.send();
    } catch (e) {
        alert(e);
    }
});