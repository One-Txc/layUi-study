

function sure() {
    layer.open({
        icon: 6,
        title: ''
        ,content: '傻瓜我属于你的啊!',
        end: function(index, layero){
            parent.layer.closeAll();
        }
    });
}