timer();
var current=0;
var $interval;

function timer(){
  var $interval=setInterval(function(){slide()},2000);                        
}

function slide(){
  $(".bannerbox").animate({left:"-=187px"},1000,function(){
    $(this).css({"left":0});
    $(".bannerbox").append( $("ul").children("li").eq(0) );
  });    
  current++;
  if(current==5)current=0;
}   