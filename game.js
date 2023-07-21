var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var userChosenColour;
var lvl=-1;
var i;
$(".base-btn").css("height",$(".base-btn").css("width"));
function nextSequence(){
   
    
   
        
                var randomNumber=Math.random();
                randomNumber*=4;
                randomNumber=Math.floor(randomNumber);
                var randomChosenColour=buttonColours[randomNumber];
                gamePattern.push(randomChosenColour);
                $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                playSound(randomChosenColour);
            
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
$(document).on("keypress",function(){
if(lvl=-1){
    lvl=1;
    $("h1").text("Level 1");
   
    nextSequence();
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
        nextSequence();
        $("h1").text("Level "+lvl);
       
       setTimeout(
        function(){
            myLoop(lvl-1,nextSequence,100);
            },2000);
       
        
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
        myLoop;
    }
}
function wrong()
{
    lvl=1;
    $("h1").text("Level 1");
    nextSequence();
    playSound("wrong");
    
}
