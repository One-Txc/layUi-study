


function bofang() {
    //$('#aaa').play();
    var myAudio = document.getElementById('aaa');
    if(myAudio.paused){
        myAudio.play();
    }else {
        myAudio.pause();
    }
}

function ffff() {
    var myAudio = document.getElementById('aaa');
    console.log(myAudio.paused);
    console.log(myAudio.played);
}