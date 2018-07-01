

function question3sure() {
    layer.open({
        icon: 1,
        title: '可以吗'
        ,content: '低头我可以吻你吗!',
        end: function(index, layero){
            parent.layer.closeAll();
        }
    });
}