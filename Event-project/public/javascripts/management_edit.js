$(document).ready(function () {

    /**
    * On combobox change
    */
    $('#post_edit_gallery').change(function () {
        var lang = $('#setLang').val();
        var id = $('#post_edit_gallery').val();
        var list_event;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                list_event = xhttp.responseText;
                var data = JSON.parse(list_event);
                let str = "";
                for (var i = 0; i < data.length; i++) {
                    str += ' <p><label>Tiêu đề</label> <input class="w3-input" type="text" value="'+ data[i]['fullName'] +'" name="title" /> </p> <p><label>Giá</label> <input class="w3-input" type="number" value="'+ data[i]['price'] +'" name="price" /> </p> <p> <label>Địa chỉ</label><input class="w3-input" type="text" value="'+ data[i]['address'] +'" name="address" /></p><label>Miêu tả </label> <textarea class="w3-input"  name="description" />'+ data[i]['description'] +'</textarea></br> <label>Ngày tổ chức sự kiện</label> <input type="date" class="w3-input" value="2013-01-24" name="date" /> </br><label>Chọn Ảnh</label>  <input type="file" value="/public/stylesheets/img/'+ data[i]['path_img'] +'" class="w3-input" placeholder="Write something.." name="files" />';
                }
                $('#loadDataGalleryEdit').html(str);
            }
        }
        xhttp.open("GET", "http://150.95.109.217/admin-home/findOne_data_edit?lang=" + lang +"&id="+ id);
        xhttp.send();

    });
    $('#setLang').change(function () {
        var lang = $('#setLang').val();
        
        var list_event;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                list_event = xhttp.responseText;
                var data = JSON.parse(list_event);
                let str = "<option>Chọn bài cần sửa</option>";
                for (var i = 0; i < data.length; i++) {
                    str += "<option value='" + data[i]['id'] + "'>" + data[i]['fullName'] + "</option>";
                
                }
                $('#post_edit_gallery').html(str);
            }
        }
        xhttp.open("GET", "http://150.95.109.217/admin-home/find_data_edit?lang=" + lang);
        xhttp.send();

    });
});