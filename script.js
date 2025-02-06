// let text1 = document.getElementById("text");

// document.addEventListener("load", funct1)


// function func1() {
//     text1.innerHTML = "Width:" + window.innerWidth + "    Height: " + window.innerHeight;
// }

// function close1() {
//    let newWindow = window.open();
//    let newE = document.createElement("p");
//    newE.innerHTML = "Welcome to a new page";
//    newWindow.document.body.append(newE);
   
// }


// function func1() {
//    let newPage = window.open("https://preview.colorlib.com/theme/rezume/#section-resume",  "width=200", "height = 300");
//    newPage.width = "200";
//    newPage.height = "200";

//    // window.outerWidth = "200px";
//    // window.outerHeight = "200px";
//    // setTimeout(() => {
//       // newPage.close();
//    // }, 5000);
// }

let div = document.getElementById("modalW");

function func1() {
   div.style.display = "flex";
   document.body.style.overflowY = "hidden";
}
function func2() {
   div.style.display = "none";
   document.body.style.overflowY = "scroll";

}