var numberOfBtn = document.querySelectorAll(".drum").length;
for(i=0; i<numberOfBtn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var btnInnerHtml = this.innerHTML;
        makeSound(btnInnerHtml);
        addAnimation(btnInnerHtml);
    
        
    });
    
}

document.addEventListener("keydown", function(event){
    var pressedKey = event.key;
    makeSound(pressedKey);
    addAnimation(pressedKey);
});


function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }

}

function addAnimation(button){
   var activeKey = document.querySelector("." + button);
   activeKey.classList.add("pressed");

   setTimeout(function(){
    activeKey.classList.remove("pressed");
   }, 100);
}



