$(function(){
//ハンバーガー
$('#ham-btn').on('click',function(){
    $(this).toggleClass('click');
//
//$('#g-nav').fadeToggle();    
//$('#g-nav').slideToggle(200);
$('#g-nav').toggleClass('slide');
$('#nav-wrapper').fadeToggle(200);

});
//黒井は半透明の要素のクリック
$('#nav-wrapper').on('click',function(){
    $('#g-nav').removeClass('slide');
    $(this).fadeOut(200);
    $('#ham-btn').removeClass('click');
});



//西暦の取得
var today=new Date();
fullYear=today.getFullYear();
console.log(fullYear);
document.getElementById('this-year').innerHTML = fullYear;

//外部ファイルの取得
$.ajax({
    url: '/furniture/img/animation.svg',//呼び出したいsvgファイルのパスを入れる
    })
    .then(
        // 1つめは通信成功時の処理
        function(data){
            var svg = $(data).find('svg');
          $('#svg-box').append(svg);
        },
        // 2つめは通信失敗時の処理
function(){
	alert('読み込み失敗');
});
//cookieの指定 ローディングアニメーション 

// $('#curtain').delay(4000).fadeOut(2000);
if($.cookie('access')){
    //2回目以降の処理
    $('#curtain').hide();
}else{
$('#curtain').delay(4000).fadeOut(2000);  
    //1回目のアクセスの処理    
}

//ファイルがロードされたら
$(window).on('load',function(){
    $.cookie('access',$('body').addClass('access'),{
     expires: 1 
    });
    });

});
