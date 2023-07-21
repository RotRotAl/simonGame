var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var userChosenColour;
var lvl=-1;
var i;
$(".base-btn").css("height",$(".base-btn").css("width"));
function nextSequence(){
   
    if(gamePattern.length<1)
    {
        sleep(600);
    }
   
       
                var randomNumber=Math.random();
                randomNumber*=4;
                randomNumber=Math.floor(randomNumber);
                var randomChosenColour=buttonColours[randomNumber];
                playSound(randomChosenColour);
                $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
                gamePattern.push(randomChosenColour);
                
                sleep(200);
    
        
   
            
}
function userHandler(event){
    
    var userChosenColour=event.target.id; 
   playSound(userChosenColour);
   animatePress(userChosenColour);
   userClickedPattern.push(userChosenColour);
   if(userClickedPattern.length>=gamePattern.length){
    checkAnswer();
   }
  
}
function playSound(name){
    var audio=new Audio("./sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(
    function(){
        $("#"+currentColour).removeClass("pressed");
        },100);
}
$(".base-btn").click(userHandler);
$("#start").click(function(){
if(lvl=-1){
    $("#start").fadeOut();
    lvl=1;
    $("h1").text("Level 1");
    setTimeout(
        nextSequence(),500);

}
});
function checkAnswer(){
    console.log(JSON.stringify(userClickedPattern) === JSON.stringify(userClickedPattern));
    console.log(JSON.stringify(userClickedPattern));
    console.log(JSON.stringify(userClickedPattern));
    if(JSON.stringify(gamePattern) === JSON.stringify(userClickedPattern)){
        lvl++;
        userClickedPattern=[];
        gamePattern=[];
       
        $("h1").text("Level "+lvl);
       
      i=0;
            myLoop(lvl-1,nextSequence,100);
            
       
    }
        
        else
        {
            
            wrong();
        }
    
}
function myLoop(max,func,interval)
{
    setTimeout(
       func,interval);
    if(i<max)
    {
        i++;
        myLoop(max,func,interval);
    }
}
function wrong()
{
    playSound("wrong");
    alert("sorry but its wrong,restrting");
    location.reload();
    
}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }