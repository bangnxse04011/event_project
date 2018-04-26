$(document).ready(function () {
    $('#post_edit_type').change(function () {

        let str = '<option value="">Chọn ngôn ngữ </option> <option value="en">Sửa Tiếng Anh </option><option value="vi">Sửa Tiếng Việt </option> ';
        $('#post_edit_lang').html(str);
    });

    $('#post_edit_lang').change(function () {

        var lang = $('#post_edit_lang').val();
        var type = $('#post_edit_type').val();
        var list_event;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                list_event = xhttp.responseText;
                var data = JSON.parse(list_event);
                let str1 = '  <option value="">Chọn bài cần sửa </option>';
                for (var i = 0; i < data.length; i++) {
                    str1 += '<option value="' + data[i]['id'] + '">' + data[i]['title'] + ' </option>';
                }

                $('#post_edit_showroom').html(str1);
            }
        }
        xhttp.open("GET", "//localhost:3000/admin-home/find_data_showroom_edit?lang=" + lang + "&type=" + type);
        xhttp.send();
    });

    $('#post_edit_showroom').change(function () {

        var lang = $('#post_edit_lang').val();
        var type = $('#post_edit_type').val();
        var id = $('#post_edit_showroom').val();

        var list_event;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                list_event = xhttp.responseText;
                var data = JSON.parse(list_event);
                let str1 = '';
                for (var i = 0; i < data.length; i++) {
                    str1 += ' <p><label>Tiêu đề</label> <input class="w3-input" type="text" value="'+ data[i]['fullName'] +'" name="title" /> </p> <p><label>Giá</label> <input class="w3-input" type="number" value="'+ data[i]['price'] +'" name="price" /> </p> <p> <label>Địa chỉ</label><input class="w3-input" type="text" value="'+ data[i]['address'] +'" name="address" /></p><label>Miêu tả </label> <textarea class="w3-input"  name="description" />'+ data[i]['description'] +'</textarea></br> <label>Ngày tổ chức sự kiện</label> <input type="date" class="w3-input" value="2013-01-24" name="date" /> </br><label>Chọn Ảnh</label>  <input type="file" value="/public/stylesheets/img/'+ data[i]['path_img'] +'" class="w3-input" placeholder="Write something.." name="files" />';
                }

                $('#loadDataEditShowRoow').html(str1);
            }
        }
        xhttp.open("GET", "//localhost:3000/admin-home/findOne_data_edit_event?lang=" + lang + "&type=" + type + "&id=" + id);
        xhttp.send();
    });
});