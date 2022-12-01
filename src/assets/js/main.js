console.log('Application running.');
// ================bai2====================
// --------------------Toggle-menu-----------------------
const dropdownButton = document.querySelector('#dropdown');
const iconMenu = document.querySelector('#icon-menu');
const dropdownList = document.querySelector('#dropdown + div.hidden');
var toggle = false;
if(dropdownButton) {
    dropdownButton.addEventListener('click', () => {
        dropdownList.classList.toggle('hidden');
        if (toggle === true) {
            iconMenu.src =
                'assets/images/bai2/hamburger-menu.svg';
        } else {
            iconMenu.src =
                'assets/images/bai2/icon-close.svg'
        }
        toggle = !toggle;
    });
}

// ---------------------valid-url---------------------
const formShortLink = document.querySelector('#form-short-link');
const inputURL = document.querySelector('#input-url');
const errorMess = document.querySelector('#error-valid');
if(formShortLink) {
    formShortLink.addEventListener("submit", handleShortLink);
}
function handleShortLink(e) {
    e.preventDefault();
    console.log(inputURL.value, 'dd');
    if(inputURL.value == '') {
        errorMess.innerText = "Please enter something"
        errorMess.classList.add('block')
        errorMess.classList.remove('hidden')
    }
    console.log(value);

}
function isValidHttpUrl(string) {
  console.log(string);
    let url;
    try {
      url = new URL(string);
      errorMess.classList.add('hidden')
    } catch (_) {
        errorMess.innerText = "Please enter a valid URL"
        errorMess.classList.add('block')
        errorMess.classList.remove('hidden')
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

// ================bai3====================
// ---------------------Toggle-menu-----------------------
const menuHamburger = document.querySelector('#menu-hamburger');
const logo = document.querySelector('#logo');
const navMenu = document.querySelector('#menu-hamburger + div.hidden');
const iconClose = document.querySelector('#icon-close');
if(menuHamburger) {
    menuHamburger.addEventListener('click', () => {
        console.log('bai3')
        navMenu.classList.toggle('hidden');
        logo.classList.add('hidden');
        menuHamburger.classList.add('hidden');
    });
}
iconClose.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    logo.classList.toggle('hidden');
    menuHamburger.classList.toggle('hidden');
});


// ---------------------tabs-----------------
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent =document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});

function openTabs(el) {
    var btn = el.currentTarget;
    var electronic = btn.dataset.electronic;
    tabContent.forEach(function(el) {
        console.log(el);
       el.classList.remove("active");
       el.classList.add("hidden")
    });
 
    tabLinks.forEach(function(el) {
       el.classList.remove("active");
    });
 
    document.querySelector("#" + electronic).classList.add("active");
    document.querySelector("#" + electronic).classList.remove("hidden");
    
    btn.classList.add("active");
 }
//  ---------------------collapsible-----------------

    var accordionLinks = document.querySelectorAll(".accordion-toggle");
    var accordionContent = document.querySelectorAll(".accordion-content");
    accordionLinks.forEach(function(el) {
        el.addEventListener("click", handleAccordion);
     });

    function handleAccordion(el) {
        var accordionLink = el.currentTarget;
        var accordion = accordionLink.dataset.accordion;
        console.log('ss', accordionLink);
        accordionLink.querySelector(".icon-arrow").classList.toggle("rotate-arrow");

        accordionContent.forEach(function(el) {
            if(el.classList.contains("hidden")) {
                el.classList.add("hidden")
            }
            else {
                el.classList.remove("hidden")
            }
        });
        accordionLinks.forEach(function(el) {
            el.classList.remove("active");
         });

         document.querySelector("#" + accordion).classList.toggle("hidden");
    }



