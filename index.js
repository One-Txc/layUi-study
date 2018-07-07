


var bodydivSize = 500;
var skewingLeft = 0;
var skewingTop = 0;
var w = window.innerWidth ;
var h = window.innerHeight ;
console.log(w);
console.log(h);

//不是电脑端则去除广告和提示
if(!isPc){
    bodydivSize = w<h?w:h;
    bodydivSize = bodydivSize*0.9;
    $("#fraudulenceButton").remove();
}
if(w > bodydivSize){
    skewingLeft = (w-bodydivSize)/2;
}
if(h > bodydivSize){
    skewingTop = (h-bodydivSize)/2;
}
var css = {
    'height': bodydivSize+'px',
    'width': bodydivSize+'px',
    'margin-left': skewingLeft+'px',
    'margin-top': skewingTop+'px'
};
$("#body-div").css(css);
var dzhCss = {
    'height': bodydivSize+'px',
    'width': bodydivSize+'px',
    'margin-left': skewingLeft+'px',
};
$("#dzh-desc").css(dzhCss);

//判断是否展示广告和说明
if(isPc && !isDz){
    $("#dzh-desc").show();
}
if(!isDz){
    layui.use(['layer', 'form'], function(){
        layer = layui.layer;
        form = layui.form;
        layui.layer.open({
            //title: '我发四',
            // content: '由于小哥哥最近吃了太多狗粮,所以强势求女友呀,有意私我!'
            content: '体验了你确定不给我一个赞和好评吗!'
        });
    });
}

if(userName != ""){
    $("#titleId").val(userName);
    $("#titleId").html(userName);
}
if(question != ""){
    $("#questionId").val(question);
    $("#questionId").html(question);
}
if(isPc){
    $("#questionId").css({
        'font-size': '18px'
    })
}

//按钮的left,top坐标
//获取页面某一元素的绝对X,Y坐标
var bWidth = $('#okButton').outerWidth(true)
var bHeigth = $('#okButton').outerHeight(true)
var indexTop = $('#okButton').offset().top;
var indexLeft = $('#okButton').offset().left;
//获取相对(父元素)位置:
//var X = $('#DivID').position().top;
//var Y = $('#DivID').position().left;

var okCount = 0;
function okButtonClick() {
    okCount += 1;
    if(happyEnd){
        layer.open({
            title: '爱你',
            type: 2,
            area: [bodydivSize+'px', bodydivSize+'px'],
            content: 'ok.html',
            end: function(index, layero){
            }
        });
    }else {
        if(okCount == 1){
            layer.open({
                //title: '爱你',
                title: '没结果',
                type: 2,
                area: [bodydivSize+'px', bodydivSize+'px'],
                content: 'haha.html',
                end: function(index, layero){
                }
            });
        }else if(okCount == 2){
            layer.open({
                title: '少做梦了',
                type: 2,
                area: [bodydivSize+'px', bodydivSize+'px'],
                content: 'xingxing.html',
                end: function(index, layero){
                }
            });
        }else {
            layer.open({
                title: '天旋地转',
                type: 2,
                area: [bodydivSize+'px', bodydivSize+'px'],
                content: 'ok.html',
                end: function(index, layero){
                }
            });
        }
    }
}

var noCount = 0;
function noButtonClick() {
    noCount += 1;
    if(noCount == 1){
        layui.layer.open({
            title: '我发四'
            ,content: '房子写你名字!'
        });
    }else if(noCount == 2){
        layui.layer.open({
            title: ''
            ,content: '保大!'
        });
    }else if(noCount == 3){
        layui.layer.open({
            title: ''
            ,content: '我妈会游泳!'
        });
    }else if(noCount == 4){
        layer.open({
            closeBtn:isAccessFile?1:0,
            title: '要不答应,先答题',
            type: 2,
            area: [bodydivSize+'px', bodydivSize+'px'],
            content: 'question-01.html',
            end: function(index, layero){
            }
        });
    }else if(noCount == 5){
        layer.open({
            closeBtn:isAccessFile?1:0,
            title: '再来一题',
            type: 2,
            area: [bodydivSize+'px', bodydivSize+'px'],
            content: 'question-02.html',
            end: function(index, layero){
            }
        });
    }else if(noCount == 6){
        layer.open({
            closeBtn:isAccessFile?1:0,
            title: '还不放弃吗？',
            type: 2,
            area: [bodydivSize+'px', bodydivSize+'px'],
            content: 'question-03.html',
            end: function(index, layero){
            }
        });
    }else if(noCount == 7){
        layui.layer.open({
            icon: 5,
            title: ''
            ,content: '必须选好!'
        });
        $('#noButton').mouseover(function(){
            //layui.layer.msg('Hello World');
            //随机leftP,topP
            var leftP;
            do{
                leftP = parseInt(Math.random()*(w-bWidth));
            }while(leftP<=(indexLeft+bWidth) && leftP>=indexLeft && leftP>=(w-bWidth));
            indexLeft = leftP;

            var topP;
            do{
                topP = parseInt(Math.random()*(h-bHeigth));
            }while(topP<=(indexTop+bHeigth) && topP>=indexTop && topP>=(h-bHeigth));
            indexTop = topP;
            var bcss = {
                position: 'absolute',
                left: indexLeft+'px',
                top: indexTop+'px'
            };
            $('#noButton').css(bcss)
        });
    }else {
        var leftP;
        do{
            leftP = parseInt(Math.random()*(w-bWidth));
        }while(leftP<=(indexLeft+bWidth) && leftP>=indexLeft && false);
        indexLeft = leftP;

        var topP;
        do{
            topP = parseInt(Math.random()*(h-bHeigth));
        }while(topP<=(indexTop+bHeigth) && topP>=indexTop && false);
        indexTop = topP;
        var bcss = {
            position: 'absolute',
            left: indexLeft+'px',
            top: indexTop+'px'
        };
        $('#noButton').css(bcss)
    }
}

var fraudulenceCount = 0;
function fraudulence(){
    fraudulenceCount += 1;
    if(fraudulenceCount == 1){
        $("#fraudulenceButton").html("好好");
    }else {
        okButtonClick();
    }
}


