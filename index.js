
var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelectorAll("img")[0].setAttribute("src", "./images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2)
{
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 is winner";
}else if(randomNumber1<randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 is winner";
}else{
    document.getElementsByTagName("h1")[0].innerHTML = "DRAW";
}
