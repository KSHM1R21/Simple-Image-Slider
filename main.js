// Main-Box Variables Selection
var box = document.querySelector('.wraper');


// navigators Variable Selection
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");



// Counter
var counter = 1;

// Next__Button
function next() {

    counter = ++counter;
    console.log("next" + " " + counter);

    switch (counter) {
        case 2:
            box.style.transform = 'translatex(-100%)'; //img2
            btn1.classList.remove("active");
            btn2.classList.add("active");
            btn3.classList.remove("active");
            btn4.classList.remove("active");
            btn5.classList.remove("active");
            break;

        case 3:
            box.style.transform = 'translatex(-200%)'; //img3
            btn2.classList.remove("active");
            btn1.classList.remove("active");
            btn3.classList.add("active");
            btn4.classList.remove("active");
            btn5.classList.remove("active");
            break;

        case 4:
            box.style.transform = 'translatex(-300%)'; //img4
            btn2.classList.remove("active");
            btn1.classList.remove("active");
            btn3.classList.remove("active");
            btn4.classList.add("active");
            btn5.classList.remove("active");
            break;

        case 5:
            box.style.transform = 'translatex(-400%)'; //img5
            btn2.classList.remove("active");
            btn1.classList.remove("active");
            btn3.classList.remove("active");
            btn4.classList.remove("active");
            btn5.classList.add("active");
            break;

        case 6:
            box.style.transform = "translateX(0px)"; //img1
            btn1.classList.add("active");
            btn2.classList.remove("active");
            btn3.classList.remove("active");
            btn4.classList.remove("active");
            btn5.classList.remove("active");
            counter = 1;
            break;

        default:

            break;
    }

}


// Previus__Button
function prev() {


    console.log("prev" + " " + counter);

    switch (counter) {
        case 2:
            box.style.transform = 'translatex(0%)'; //img1
            btn1.classList.add("active");
            btn2.classList.remove("active");
            btn3.classList.remove("active");
            btn4.classList.remove("active");
            btn5.classList.remove("active");
            counter = 1;
            break;


        case 3:
            box.style.transform = 'translatex(-100%)'; //img2
            btn1.classList.remove("active");
            btn2.classList.add("active");
            btn3.classList.remove("active");
            btn4.classList.remove("active");
            btn5.classList.remove("active");
            counter = 2;
            break;

        case 4:
            box.style.transform = 'translatex(-200%)'; //img3
            btn1.classList.remove("active");
            btn2.classList.remove("active");
            btn3.classList.add("active");
            btn4.classList.remove("active");
            btn5.classList.remove("active");
            counter = 3;
            break;

        case 5:
            box.style.transform = 'translatex(-300%)'; //img4
            btn1.classList.remove("active");
            btn2.classList.remove("active");
            btn3.classList.remove("active");
            btn4.classList.add("active");
            btn5.classList.remove("active");
            counter = 4;
            break;

        case 1:
            box.style.transform = "translateX(-400%)"; //img5
            btn1.classList.remove("active");
            btn2.classList.remove("active");
            btn3.classList.remove("active");
            btn4.classList.remove("active");
            btn5.classList.add("active");
            counter = 5;
            break;





        default:
            break;
    }

}


// Navigation__Buttons
btn1.onclick = function () {
    box.style.transform = "translateX(0px)";
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    counter = 1;
}

btn2.onclick = function () {
    box.style.transform = "translateX(-100%)";
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    counter = 2;
}


btn3.onclick = function () {
    box.style.transform = "translateX(-200%)";
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    counter = 3;
}

btn4.onclick = function () {
    box.style.transform = "translateX(-300%)";
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.add("active");
    btn5.classList.remove("active");
    counter = 4;
}

btn5.onclick = function () {
    box.style.transform = "translateX(-400%)";
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.add("active");
    counter = 5;
}




// function next() {

//     console.log('next-btn Pressed');

//     box.style.transform = 'translatex(-100%)';
//     btn2.classList.add("active");
//     btn1.classList.remove("active");
//     btn3.classList.remove("active");


// }


// function prev() {

//     console.log('prev-btn Pressed');

//     box.style.transform = 'translatex(0%)';
//     // counter2.style.transform = 'translatex(200%)';
//     btn1.classList.add("active");
//     btn2.classList.remove("active");
//     btn3.classList.remove("active");

// }