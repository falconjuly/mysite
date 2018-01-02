
function add_column(){
    var url = location.host
    var index = layer.open({
        type:1,
        skin:"layui-layer-rim",
        area: ["400px","200px"],
        title: "新增栏目",
        content: '<div class="text-center" style="margin-top:20px"><p>请输入栏目名字</p><p><input type="text" id="id_column"></p></div>',
        btn:['confirm','cancel'],
        yes: function(index, layero) {
            column_name = $('#id_column').val();
            $.ajax({
                url: 'http://'+url+'/article/article-column/',
                type: 'POST',
                data: {
                    "column":column_name
                },
                success: function(e){
                    if(e=='1'){
                        parent.location.reload()
                    }else{
                        layer.msg('此栏目已存在，请更换栏目名');
                    }
                },
            });
        },
        btn2: function(index,layero) {
            layer.close(index)
        }
    });
}

function edit_column(the, column_id){
    var url = location.host
    var name = $(the).parents("tr").children('td').eq(1).text();
        var index = layer.open({
            type: 1,
            skin: "layui-layer-rim",
            area: ["400px", "200px"],
            title: "编辑栏目",
            content: '<div class="text-center" style="margin-top:20px"><p>请编辑的栏目名称</p><p><input type="text" id="new_name"  value="'+name+'"></p></div>',
            btn: ['submit', 'cancel'],
            yes: function(index, layero){
                new_name = $('#new_name').val();
                $.ajax({
                    url: 'http://'+url+'/article/rename-column/',
                    type: "POST",
                    data: {"column_id": column_id,
                           "column_name": new_name},
                    success: function(response){
                        if(response['status']==true){
                            parent.location.reload();
                            layer.msg("good");
                        }else{
                            layer.msg("新的名称没有保存，修改失败。")
                        }
                    }
                });
            },

        });
}

function del_column(the, column_id){
    var url = location.host
    var name = $(the).parents("tr").children('td').eq(1).text();
    var index = layer.open({
        type: 1,
        skin: "layui-layer-rim",
        area: ["400px", "200px"],
        title: "删除栏目",
        content: '<div class="text-center" style="margin-top:20px"><p>请编辑的栏目名称</p><p><input type="text" id="new_name" value="'+name+'"></p></div>',
        btn: ['submit', 'cancel'],
        yes: function(index, layero){
            new_name = $(#new_name).val()
            $.ajax({
                url: 'http://'+url+'/article/article-column/',
            })
        }

    })
}