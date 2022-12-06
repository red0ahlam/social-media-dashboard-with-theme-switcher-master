
let theme = window.localStorage.getItem('theme');
const toggle_button = document.querySelector(".toggle-button");
const body = document.querySelector(".body");

function enable() {
    body.classList.add("dark-mode");
    toggle_button.ariaPressed = "true";
    toggle_button.classList.add('dark-button');
    toggle_button.classList.remove('white-button');
    window.localStorage.setItem("theme", "dark");
}

function disable() {
    body.classList.remove("dark-mode");
    toggle_button.ariaPressed = "false";
    toggle_button.classList.add('white-button');
    toggle_button.classList.remove('dark-button');
    window.localStorage.setItem("theme", "white");
}

if (theme == "dark") {
    enable();
}

toggle_button.addEventListener('click', () => {
    let theme = window.localStorage.getItem('theme');
    if (theme == "white") {
        enable();
    }else {
        disable();
   }
})
