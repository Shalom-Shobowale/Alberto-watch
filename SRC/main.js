
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

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

let details1 = document.getElementById("details1");
let details2 = document.getElementById("details2");
let details3 = document.getElementById("details");
let details4 = document.getElementById("details4");
let details5 = document.getElementById("details5");


btn1.onclick = function (){
    if(btn1.click){
        details1.classList.remove("hidden")
    }else{
        details1.classList.add("hidden")
    }
}

btn2.onclick = function (){
    if(btn2.click){
        details1.classList.add("hidden")
        details2.classList.remove("hidden")
    }else{
        details2.classList.add("hidden")
    }
}

btn3.onclick = function (){
    if(btn3.click){
        details2.classList.add("hidden")
        details3.classList.remove("hidden")
    }else{
        details3.classList.add("hidden")
    }
}

btn4.onclick = function (){
    if(btn4.click){
        details3.classList.add("hidden")
        details4.classList.remove("hidden")
    }else{
        details4.classList.add("hidden")
    }
}

btn5.onclick = function (){
    if(btn5.click){
        details4.classList.add("hidden")
        details5.classList.remove("hidden")
    }else{
        details5.classList.add("hidden")
    }
}





