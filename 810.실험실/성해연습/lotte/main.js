// timer();
// var current=0;
// var $interval;

// function timer(){
//   var $interval=setInterval(function(){slide()},2000);                        
// }

// function slide(){
//   $(".bannerbox").animate({left:"-=187px"},1000,function(){
//     $(this).css({"left":0});
//     $(".bannerbox").append( $("ul").children("li").eq(0) );
//   });    
//   current++;
//   if(current==5)current=0;
// }   


// 이게 일단 맞음 ㅋㅋㅋㅋㅋ_________________________________________________

// timer();
// let current=0;
// let $interval;

// function timer(){
//   let $interval=setInterval(function(){slide()},3000);                        
// }

// function slide(){
//   $(".bannerbox").animate({
//     top:"-100%"
//   },1200,function(){
//     $(this).css({"top":0});
//     $(".bannerbox").append( $("ul").children("li").eq(0) );
//   });    
//   current++;
//   if(current==5)current=0;
// }




//___________________________________________________________________



window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {





    /***************************************************
        HEADER 영역 - 메뉴 보이기/숨기기
    ***************************************************/
    // 햄버거버튼요소
    const viewBtn = document.querySelector(".ham");
    const closeBtn = document.querySelector(".close");
    const black = document.querySelector(".black");
    // console.log("버튼있니?",viewBtn);

    // 이벤트 설정하기 //////
    viewBtn.onclick = videoView;
    function videoView(){
        // 1. 호출확인
        console.log("나야나!");
        
        // 2. 대상선정 : .momenu
        const videoBox = document.querySelector(".momenu");
        
        // 3. 변경내용 : 화면에 보이기
        videoBox.style.left = "0";
        black.style.transition = ".3s";
        black.style.opacity = "1";
        black.style.zIndex = "99";
        
        
    } /////////////////// videoView 함수 ///////////////

    // 이벤트 설정하기 //////
    closeBtn.onclick = videoClose;
    function videoClose(){
        // 1. 호출확인
        console.log("나야나!");
        
        // 2. 대상선정 : .momenu
        const videoBox = document.querySelector(".momenu");
        
        // 3. 변경내용 : 화면에 보이기
        videoBox.style.left = "-100%";
        black.style.opacity = "0";
        black.style.zIndex = "-1";
        
    } /////////////////// videoView 함수 ///////////////

} ////////////////loadFn ///////////////////////////////////