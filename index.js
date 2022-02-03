//Changes for image-1 
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumImage1 = "dice" + randomNumber1 + ".png";
var imgsrc1 = "images/"+randomNumImage1;
var change1 = document.querySelectorAll("img")[0];
change1.setAttribute("src",imgsrc1);

//Changes for image-2
var randomNumber2 =Math.floor((Math.random()*6)+1);
var randomNumImage2 = "dice" + randomNumber2 + ".png";
var imgsrc2 = "images/"+randomNumImage2;
var change2 = document.querySelectorAll("img")[1];
change2.setAttribute("src",imgsrc2);

//Changing the title
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Its a Draw! 🚩";
}