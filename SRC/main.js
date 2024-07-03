
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active classes
            tabs.forEach(item => item.classList.remove("text-blue-600", "border-blue-600"));
            contents.forEach(content => content.classList.add("hidden"));

            // Add active classes to the clicked tab and show its content
            tab.classList.add("text-blue-600", "border-blue-600");
            document.getElementById(tab.getAttribute("data-target")).classList.remove("hidden");
        });
    });
});


let btns = document.querySelectorAll(".btns")
let Close = document.getElementById("Close")
let popUp = document.querySelectorAll(".popUp")
Close.onclick = function(){
    popUp.classList.add("hidden")
}
btns.forEach((item, index) => {
    item.addEventListener('click', function(){
        popUp[index].classList.remove("hidden");
    });
    // console.log(index);
});

// dropdown

// let dropdown = document.getElementById("dropdown");
// let checkbox1 = document.getElementById("checkbox1");
// dropdown.onclick = function() {
//     checkbox1.classList.toggle("hidden");
// }

const slider = document.getElementById('slider');
const track = document.getElementById('track');
const thumbMin = document.getElementById('thumbMin');
const thumbMax = document.getElementById('thumbMax');
const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');
        
const min = 0;
const max = 1000;
const step = 1;

let minValue = 0;
let maxValue = 1000;

function setSlider() {
    const percent1 = ((minValue - min) / (max - min)) * 100;
    const percent2 = ((maxValue - min) / (max - min)) * 100;
    thumbMin.style.left = `${percent1}%`;
    thumbMax.style.left = `${percent2}%`;
    track.style.left = `${percent1}%`;
    track.style.width = `${percent2 - percent1}%`;
    minPrice.textContent = `$${minValue}`;
    maxPrice.textContent = `$${maxValue}`;
}

function startMove(event, thumb) {
    event.preventDefault();
    const onMove = (e) => move(e, thumb);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMove);
    });
}

function move(event, thumb) {
    const rect = slider.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percent = (offsetX / rect.width) * 100;
    const value = Math.round((percent / 100) * (max - min) / step) * step + min;

    if (thumb === thumbMin && value < maxValue && value >= min) {
        minValue = value;
    } else if (thumb === thumbMax && value > minValue && value <= max) {
        maxValue = value;
    }
    setSlider();
}

thumbMin.addEventListener('mousedown', (event) => startMove(event, thumbMin));
thumbMax.addEventListener('mousedown', (event) => startMove(event, thumbMax));

setSlider();



// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");
// let btn4 = document.getElementById("btn4");
// let btn5 = document.getElementById("btn5");

// let details1 = document.getElementById("details1");
// let details2 = document.getElementById("details2");
// let details3 = document.getElementById("details");
// let details4 = document.getElementById("details4");
// let details5 = document.getElementById("details5");


// btn1.onclick = function (){
//     if(btn1.click){
//         details1.classList.remove("hidden")
//     }else{
//         details1.classList.add("hidden")
//     }
// }

// btn2.onclick = function (){
//     if(btn2.click){
//         details1.classList.add("hidden")
//         details2.classList.remove("hidden")
//         details3.classList.add("hidden")
//         details3.classList.add("hidden")
//     }else{
//         details2.classList.add("hidden")
//     }
// }

// btn3.onclick = function (){
//     if(btn3.click){
//         details1.classList.add("hidden")
//         details3.classList.remove("hidden")
//         details4.classList.add("hidden")
//         details2.classList.add("hidden")
//         details5.classList.add("hidden")
//     }else{
//         details3.classList.add("hidden")
//     }
// }

// btn4.onclick = function (){
//     if(btn4.click){
//         details1.classList.add("hidden")
//         details4.classList.remove("hidden")
//         details5.classList.add("hidden")
//         details2.classList.add("hidden")
//         details3.classList.add("hidden")
//     }else{
//         details4.classList.add("hidden")
//     }
// }

// btn5.onclick = function (){
//     if(btn5.click){
//         details1.classList.add("hidden")
//         details4.classList.add("hidden")
//         details5.classList.remove("hidden")
//     }else{
//         details5.classList.add("hidden")
//     }
// }



// console.log(btns, popUp);







