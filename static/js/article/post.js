function publish_article() {
    var url = location.host
    var title = $('#id_title').val()
    var column_id = $('#which_column').val()
    var body = $('#id_body').val()
    $.ajax({
        url: 'http://'+url+'/article/article-post/',
        type: 'POST',
        data: {"title": title,
                "body": body,
                "column_id":column_id
        },
        success: function (response) {
            console.log(response)
            if(response['status']==true){
                layer.msg("success");
            }else{
                layer.msg("失败。");
            }
        },
    });
}