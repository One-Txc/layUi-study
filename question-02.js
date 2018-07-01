

function question2sure() {
    layer.open({
        icon: 1,
        title: '惊不惊喜不喜'
        ,content: '我喜欢痴痴的望着你!',
        end: function(index, layero){
            parent.layer.closeAll();
        }
    });
}