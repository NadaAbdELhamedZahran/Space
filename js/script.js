// city and location
// *****************
var select = document.getElementById("selectCity"),
    setBtn = document.getElementById("form"),
    options = ["Cairo", "Giza", "Alexandria", "Ash Sharqia" , "Gharbia", "Luxor", "Qena", "Al Qalyubia", "South Sinai","Assiut"],
    locations = ["https://www.google.com/maps/place/Cairo,+Cairo+Governorate/@30.0594885,31.2584644,13z/data=!3m1!4b1!4m5!3m4!1s0x14583fa60b21beeb:0x79dfb296e8423bba!8m2!3d30.0444196!4d31.2357116",
                "https://www.google.com/maps/place/Giza,+El+Omraniya,+Giza+Governorate/@30.0167883,31.1896431,13z/data=!3m1!4b1!4m5!3m4!1s0x1458469235579697:0x4e91d61f9878fc52!8m2!3d30.0130557!4d31.2088526",
                "https://www.google.com/maps/place/Alexandria,+Alexandria+Governorate/@31.2241109,29.9548859,12z/data=!3m1!4b1!4m5!3m4!1s0x14f5c49126710fd3:0xb4e0cda629ee6bb9!8m2!3d31.2000924!4d29.9187387",
                "https://www.google.com/maps/place/Ash+Sharqia+Governorate/@31.1240838,30.2060506,7.33z/data=!4m5!3m4!1s0x14f7f044ed84e6db:0x6a3238c46e1c2865!8m2!3d30.7326622!4d31.7195459",
                "https://www.google.com/maps/place/Gharbia+Governorate/@30.6444757,29.1326018,7.43z/data=!4m5!3m4!1s0x14f7b653787fdc13:0x4eba4ab705c709dd!8m2!3d30.8753556!4d31.03351",
                "https://www.google.com/maps/place/Luxor+Governorate/@25.4924438,32.324617,10z/data=!3m1!4b1!4m5!3m4!1s0x144905009a9154d9:0xaface7ce9b7720d!8m2!3d25.3944444!4d32.4920088",
                "https://www.google.com/maps/place/Qena+Governorate/@26.196352,32.1664263,9z/data=!3m1!4b1!4m5!3m4!1s0x144eb63ad998b71f:0xc8c633602d59dcc3!8m2!3d26.2346033!4d32.9888319",
                "https://www.google.com/maps/place/Al+Qalyubia+Governorate/@30.3560187,31.0720011,10z/data=!3m1!4b1!4m5!3m4!1s0x14587363e04ccd45:0x2cffb68667f6e34c!8m2!3d30.3292368!4d31.2168466",
                "https://www.google.com/maps/place/South+Sinai+Governorate/@28.8353604,32.6388181,8z/data=!3m1!4b1!4m5!3m4!1s0x145418db9de8309d:0xf8bc0ebe4dadff7!8m2!3d29.3101828!4d34.1531947",
                "https://www.google.com/maps/place/Assiut+Governorate/@27.3355548,31.0338926,9z/data=!3m1!4b1!4m5!3m4!1s0x1444c2c50d94c891:0x91979805478bb54c!8m2!3d27.2133831!4d31.4456179"];

// append cities in html
// *********************
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;   
    select.appendChild(el);
}

// Choose the city from list
// *************************
document.getElementById("selectCity").addEventListener("click", chooseCity);

// create button in html  
// *********************
var btn = document.createElement("div");
btn.textContent = "View Location";
btn.id = "myBtn";

// display Location in popup when i push the button
// *************************************************
btn.addEventListener("click",displayLocation);

// create a link inside and insert it inside button in html
// ********************************************************
var popuptext = document.createElement("a");
popuptext.id = "popuptext";
popuptext.className = "hide";
popuptext.target = "_blank";
btn.appendChild(popuptext);


function chooseCity() {
    for(var i = 0; i < options.length; i++) {
        if(select.value === "City"){
            document.getElementById("loc").style.display = "inline";
            setBtn.appendChild(btn).style.display = "none";
            break;
        }   
        else if(select.value == options[i]){
            document.getElementById("myBtn").style.display = "inline-block";
            document.getElementById("loc").style.display = "none";
            popuptext.href = locations[i];
            popuptext.textContent = options[i] +" Location";
        }  
    }
}

function displayLocation(){
    document.getElementById("popuptext").classList.toggle("show");
}


// ****************************************************************
// Carousel using bootstrap
// ************************
$('.carousel').carousel({
    interval: 2000
})

// Carousel using show slides
// **************************

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   slides[slideIndex-1].style.display = "block";  
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


// ********************************************************************
// load more button with loading scenario
// --------------------------------------
var loadMoreButton = document.getElementById('loading'),
    firstList = document.querySelectorAll('.press1'),
    secondList = document.querySelectorAll('.press2'),
    spin = document.getElementById("spinner");


function spinner() {
    spin.style.display = "block";
    setTimeout(loadBtn, 3000);
}

function loadBtn(){
    "use strict";
    spin.style.display = "none";
    if(firstList[0].style.display !== "grid"){
        for (let i = 0; i < firstList.length; i++) {
            firstList[i].style.display = "grid";
        }
    }else{
        for(let x = 0; x < secondList.length; x++){
            secondList[x].style.display = "grid"
        }
        loadMoreButton.style.display="none";
    }
}

