var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userPattern=[];
var userChosenColour;
var lvl=-1;
$(".base-btn").css("height",$(".base-btn").css("width"));
function nextSequence(){
    lvl++;
    userClickedPattern=[];
    gamePattern=[];
    $("h1").text("Level "+lvl);
    for(var i=0;i<lvl;){
        setTimeout(
            function(){
                var randomNumber=Math.random();
                randomNumber*=4;
                randomNumber=Math.floor(randomNumber);
                var randomChosenColour=buttonColours[randomNumber];
                gamePattern.push(randomChosenColour);
                $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                playSound(randomChosenColour);
                i++
                },1000);
        
       
       
    }
    
}
function userHandler(event){
    var userChosenColour=event.target.id; 
   playSound(userChosenColour);
   animatePress(userChosenColour);
   userPattern.push(userChosenColour);
   if(userPattern.length>=gamePattern.length){
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
    lvl=0;
   
    nextSequence();
}
});
function checkAnswer(){
    console.log(JSON.stringify(gamePattern) === JSON.stringify(userPattern));
    console.log(JSON.stringify(gamePattern));
    console.log(JSON.stringify(userPattern));
    if(JSON.stringify(gamePattern) === JSON.stringify(userPattern)){
        nextSequence();
        }
        else
        {
            
            wrong();
        }
    
}
function wrong()
{
    lvl=0;
    nextSequence();
    playSound("wrong");
    
}