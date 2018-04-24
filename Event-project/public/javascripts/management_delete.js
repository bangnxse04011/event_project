$(document).ready(function () {

    /**
    * On combobox change
    */
    $('#link_video').change(function () {
        let data = $('#link_video').val();
        $('#id_delete').val(data);
        $('#type').val($('#type_edit').val());
        
    });
    $('#type_edit').change(function () {
        var change = $('#type_edit').val();
      
        var list_event;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                list_event = xhttp.responseText;
                var data = JSON.parse(list_event);
                let str = "<option value>--Chọn bài cần xóa--</option>";
                for (var i = 0; i < data.length; i++) {
                    str += "<option value='" + data[i]['id'] + "'>" + data[i]['fullName'] + "</option>";
                }
                $('#link_video').html(str);
            }
        }
        xhttp.open("GET", "http://localhost:3000/admin-home/find_all?change="+change);
        xhttp.send();
        
    });
    });