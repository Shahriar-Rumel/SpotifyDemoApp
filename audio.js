
document.querySelector('.capsize').addEventListener('click',()=> {
    stopsongs1();
    stopsongs2();
    stopsongs3();
    stopsongs4();
    stopsongs5();
    document.getElementById('capsize').play()
}) ;

function stopsongs1(){
    const song = document.getElementById('capsize');

    song.pause();
    song.currentTime =0;
}
document.querySelector('.novo').addEventListener('click',()=> {
    stopsongs1();
    stopsongs2();
    stopsongs3();
    stopsongs4();
    stopsongs5();
    document.getElementById('novo').play()
}) ;

function stopsongs2(){
    const song = document.getElementById('novo');

    song.pause();
    song.currentTime =0;
}
document.querySelector('.must-ve-been-the-wind').addEventListener('click',()=> {
    stopsongs1();
    stopsongs2();
    stopsongs3();
    stopsongs4();
    stopsongs5();
    document.getElementById('must-ve-been-the-wind').play()
}) ;

function stopsongs3(){
    const song = document.getElementById('must-ve-been-the-wind');

    song.pause();
    song.currentTime =0;
}
document.querySelector('.raindrops').addEventListener('click',()=> {
    stopsongs1();
    stopsongs2();
    stopsongs3();
    stopsongs4();
    stopsongs5();
    document.getElementById('raindrops').play()
}) ;

function stopsongs4(){
    const song = document.getElementById('raindrops');

    song.pause();
    song.currentTime =0;
}
document.querySelector('.mirror').addEventListener('click',()=> {
    stopsongs1();
    stopsongs2();
    stopsongs3();
    stopsongs4();
    stopsongs5();
    document.getElementById('mirror').play()
}) ;

function stopsongs5(){
    const song = document.getElementById('mirror');

    song.pause();
    song.currentTime =0;
}
