var random_number_1 = Math.ceil(Math.random() * 6);
var random_image_1 = "images/dice" + random_number_1 + ".png";
var image1 = document.querySelector(".img1");

var random_number_2 = Math.ceil(Math.random() * 6);
var random_image_2 = "images/dice" + random_number_2 + ".png";
var image2 = document.querySelector(".img2");

image1.setAttribute("src", random_image_1);
image2.setAttribute("src", random_image_2);

if (random_number_1 > random_number_2) {
  document.querySelector("h1").innerHTML = "PLAYER 1 Wins 💰🤑🚩";
} else if (random_number_1 === random_number_2) {
  document.querySelector("h1").innerHTML = "Both equal 🏳️";
} else {
  document.querySelector("h1").innerHTML = "PLAYER 2 Wins 💰🤑🚩";
}
