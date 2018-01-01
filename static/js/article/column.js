
function add_column(){
    var url = location.host
    var index = layer.open({
        type:1,
        skin:"layui-layer-rim",
        area: ["400px","200px"],
        title: "新增栏目",
        content: '<div class="text-center" styple="margin-top:20px"><p>请输入栏目名字</p><p><input type="text" id="id_column"></p></div>',
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