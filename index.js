// Your code here
let dogder = document.getElementById("dodger");
dogder.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if(e.key === "ArrowRight"){
      moveDodgerRight();
  }
});

function moveDodgerLeft(){
    let leftNumbers = dogder.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    dogder.style.left = `${left - 5}px`;
}

function moveDodgerRight(){
    let leftNumbers = dogder.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    dogder.style.left = `${left + 5}px`;
}
