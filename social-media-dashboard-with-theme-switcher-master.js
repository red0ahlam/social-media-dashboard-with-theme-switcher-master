
if(window.localStorage.getItem('theme')==''){
    window.localStorage.clear();
    window.localStorage.setItem('theme','white');
}

var theme = window.localStorage.getItem('theme');

var root = document.querySelector(':root');
var root_styles = getComputedStyle(root);
var toggle_button = document.querySelector('.toggle-button');

function style(theme){
    var bg = '--clr-'+theme+'-bg';
    var bg_value = root_styles.getPropertyValue(bg);
    var top_bg = '--clr-'+theme+'-top-bg';
    var top_bg_value = root_styles.getPropertyValue(top_bg);
    var card_bg = '--clr-'+theme+'-card-bg';
    var card_bg_value = root_styles.getPropertyValue(card_bg);
    var card_hover_bg = '--clr-'+theme+'-card-hover-bg';
    var card_hover_bg_value = root_styles.getPropertyValue(card_hover_bg);
    var text_accent = '--clr-'+theme+'-text-accent';
    var text_accent_value = root_styles.getPropertyValue(text_accent);
    var text_primary = '--clr-'+theme+'-text-primary';
    var text_primary_value = root_styles.getPropertyValue(text_primary);
   
    root.style.setProperty('--clr-bg', bg_value);
    root.style.setProperty('--clr-top-bg', top_bg_value);
    root.style.setProperty('--clr-card-bg', card_bg_value);
    root.style.setProperty('--clr-card-hover-bg', card_hover_bg_value);
    root.style.setProperty('--clr-text-accent', text_accent_value);
    root.style.setProperty('--clr-text-primary', text_primary_value);
}

function toggle () {

    if (theme == 'dark') {
        theme = 'white';
        style(theme);
        window.localStorage.setItem("theme", "white");
        toggle_button.classList.remove('dark-button');
        toggle_button.classList.add('white-button');
        toggle_button.ariaPressed = "true";
    }else {
        theme = 'dark';
        style(theme);
        window.localStorage.setItem("theme", "dark");
        toggle_button.classList.remove('white-button');
        toggle_button.classList.add('dark-button');
        toggle_button.ariaPressed = "false";
    }
}

toggle_button.addEventListener('click', toggle);
style(theme);

if (theme == 'dark') {
    toggle_button.classList.add('dark-button');
    toggle_button.classList.remove('white-button');
    toggle_button.ariaPressed = "true";
}else {
    toggle_button.classList.add('white-button');
    toggle_button.classList.remove('dark-button');
    toggle_button.ariaPressed = "false";
}