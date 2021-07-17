


// document.getElementById("home").addEventListener("click", nextSection);

// function nextSection() {
//     document.getElementById("page-home").style.display = "none";
// }

var canvas = document.getElementById('field');
canvas.width = document.getElementsByClassName("home")[0].clientWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
debugger
ctx.globalCompositeOperation = 'destination-over';
var x = 100, y = 100;

function Snow() {
    this.x = Math.round(Math.random() * (canvas.width + window.innerWidth - document.getElementsByClassName("home")[0].clientWidth));
    this.y = Math.round(Math.random() * canvas.height);
    this.r = Math.round(Math.random() * 5);
    this.a = Math.random() * 3 + 0.5;
    this.o = Math.random() * 1 + 0.1;
}

Snow.prototype.update = function () {
    ctx.beginPath();
    ctx.globalAlpha = this.o;
    ctx.fillStyle = 'white';
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();


    if (this.x > canvas.width || this.x < 0) {
        this.x = Math.round(Math.random() * canvas.width);
        this.y = 0;
    }

    this.y -= this.a;
    if (this.y < 0) {
        this.y = canvas.height;
        this.x = Math.round(Math.random() * canvas.width);
    }
}


var totalSnows = 80;
var snows = [];

function drawSnows() {
    for (var i = 0; i < totalSnows; i++) {
        snows[i].update();
    }
}

function effect() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnows();
}

// onload
window.onload = function () {
    for (var i = 0; i < totalSnows; i++) {
        snows.push(new Snow());
    }
    setInterval(effect, 40);
}

//display header
document.getElementsByClassName("togglemenu-btn")[0].addEventListener("click", togglemenu);
function togglemenu() {
    let listClass = document.getElementById("myHeader").className.split(" ");
    if(listClass.indexOf("changePosition") > -1){
        listClass.splice(listClass.indexOf("changePosition"), 1);
        document.getElementById("myHeader").className = listClass.join(" ");
    }else {
        document.getElementById("myHeader").className += " changePosition";
    }
}

//hidden section
document.getElementById("about-me").addEventListener("click", nextSection1);
document.getElementById("home").addEventListener("click", nextSection2);
document.getElementById("contact").addEventListener("click", nextSection3);
document.getElementById("resume").addEventListener("click", nextSection4);
document.getElementById("portfolio").addEventListener("click", nextSection5);



function nextSection1() {
    document.getElementById("page-about-me").style.display = "block";
    document.getElementById("page-home").style.display = "none";
    document.getElementById("page-contact").style.display = "none";
    document.getElementById("page-resume").style.display = "none";
    document.getElementById("page-portfolio").style.display = "none";

}

function nextSection2() {
    document.getElementById("page-about-me").style.display = "none";
    document.getElementById("page-home").style.display = "block";
    document.getElementById("page-contact").style.display = "none";
    document.getElementById("page-resume").style.display = "none";
    document.getElementById("page-portfolio").style.display = "none";
}

function nextSection3() {
    document.getElementById("page-about-me").style.display = "none";
    document.getElementById("page-home").style.display = "none";
    document.getElementById("page-contact").style.display = "block";
    document.getElementById("page-resume").style.display = "none";
    document.getElementById("page-portfolio").style.display = "none";
}

function nextSection4() {
    document.getElementById("page-about-me").style.display = "none";
    document.getElementById("page-home").style.display = "none";
    document.getElementById("page-contact").style.display = "none";
    document.getElementById("page-resume").style.display = "block";
    document.getElementById("page-portfolio").style.display = "none";
}

function nextSection5() {
    document.getElementById("page-about-me").style.display = "none";
    document.getElementById("page-home").style.display = "none";
    document.getElementById("page-contact").style.display = "none";
    document.getElementById("page-resume").style.display = "none";
    document.getElementById("page-portfolio").style.display = "block";
}



//set scrollbar visible when srolling
var scrolling = false;
var styleElement = document.createElement("style");

window.onscroll = function(e) {
    scrolling = true;
}

function functscroll() {
    scrolling = true;
    styleElement.appendChild(document.createTextNode(".site-main::-webkit-scrollbar-thumb {background: black;} .site-main::-webkit-scrollbar {width: 7px;}"));
    document.getElementsByTagName("head")[0].appendChild(styleElement);
    setTimeout(() => {
        if(scrolling == false) {
        styleElement.appendChild(document.createTextNode(".site-main::-webkit-scrollbar-thumb {background: transparent;} .site-main::-webkit-scrollbar {width: 0px;}"));
        document.getElementsByTagName("head")[0].appendChild(styleElement);
        }
    },500);
    scrolling = false;

    setTimeout(() => {
        console.log("OKe");
    },1000);
    scrollProgress();
};

// check position of every progress
let listArray = document.getElementsByClassName("progress");
let elemgroup = Array.prototype.slice.call(listArray);

function scrollProgress(){   
    if(listArray[0].offsetTop != 0 && elemgroup)
    {
        elemgroup.forEach((element,index) => {
            if(element.offsetTop <= (document.getElementsByClassName("site-main")[0].scrollTop + window.innerHeight))
            {
                element.click();
                elemgroup.splice(index,1);     
            }  
        });
    }    
} 

function creaseProgress(wid, elem) {
    let Percentage  = 0;
    let Cr = 0;
    let id = function() {
        if(Cr < wid) {
            Cr += 0.5;
            elem.style.width = Cr + "%";
            if(Cr%1 == 0)
            {
                elem.querySelector("span").innerText = ++Percentage + "%";
            }
        }else {
            clearInterval(id);
        }
    }
    setInterval(id,10);
}
//
$(document).ready(function () {
    $('.owl-clients').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            700: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
});
$(document).ready(function () {
    $('.owl-testimonials').owlCarousel({
        margin: 40,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
});

//set button
function setActive(name, nameactive)
{
    var btns = document.getElementsByClassName(name);

    for(var i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName(nameactive);
            current[0].className = current[0].className.replace(" " + nameactive, "");
            this.className += " " + nameactive;
        });
    };
}
setActive("btn", "active-port"); //set button portfolio
setActive("menu", "active-menu"); //set button menu


// filter portfolio

function filter(status) {
    
    var x = document.getElementsByClassName("product");
    if(status == "all") status = "product";
    for(i = 0; i < x.length; i++)
    {
        arr1 = x[i].className.split(" ");
        if(arr1.indexOf("show") > -1) arr1.splice(arr1.indexOf('show'), 1);
        x[i].className = arr1.join(" ");

        if(arr1.indexOf(status) > -1)  x[i].className += " show";
    }
}

// btncolor 
$(".toggle-button").click(function(){
    $(".color-Ctr").toggleClass("active");
});