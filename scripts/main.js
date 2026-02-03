const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/fudapie.jpeg") {
    myImage.setAttribute("src", "images/fudapie2.jpeg");
  } else {
    myImage.setAttribute("src", "images/fudapie.jpeg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `as you see,fudapie is a cute kitty, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `as you see,fudapie is a cute kitty,  ${storedName}`;
}
myButton.onclick = function () {
  setUserName();
};
