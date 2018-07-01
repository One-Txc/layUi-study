var layer;
var form;
//一般直接写在一个js文件中
layui.use(['layer', 'form'], function(){
    layer = layui.layer;
    form = layui.form;
    //layer.msg('Hello World');
});

function closeAllOpen(){
    layer.closeAll();
}


var url = window.location.href;
var userName = "";
console.log(url);
//获取参数
if(url.indexOf("?")>-1){
    try {
        var param = url.substring(url.indexOf("?")+1);
        userName = param.split("=")[1];
        userName = decodeURIComponent(userName);
    }catch (e){

    }
}

var isAccessFile = false;
//判断是用服务方式还是直接访问文件
if((url+"").startsWith("file:")){
    isAccessFile = true;
}

console.log(isAccessFile)