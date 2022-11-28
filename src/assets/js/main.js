console.log('Application running.');
// ================Toggle-menu-bai2====================
const dropdownButton = document.querySelector('#dropdown');
const iconMenu = document.querySelector('#icon-menu');
const dropdownList = document.querySelector('#dropdown + div.hidden');
var toggle = false;
if(dropdownButton) {
    dropdownButton.addEventListener('click', () => {
        dropdownList.classList.toggle('hidden');
        if (toggle === true) {
            iconMenu.src =
                'https://cdn-icons-png.flaticon.com/512/5358/5358649.png';
        } else {
            iconMenu.src =
                'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png';
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

// ================Toggle-menu-bai3====================
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



