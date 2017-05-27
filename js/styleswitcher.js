
var styleSwitcher = document.getElementById("styleswitcher");
var defaultStyle = getDefaultStyle();
$("#styleswitcher").val(defaultStyle);
activateStyle(defaultStyle);
styleSwitcher.addEventListener('change', onStyleChanged);


function onStyleChanged() {
    var selectedStyle = $("#styleswitcher").val();
    activateStyle(selectedStyle);
    setDefaultStyle(selectedStyle);
}

function activateStyle(style) {
    document.getElementById('defaultstyle').href = style;
}

function setDefaultStyle(style) {
    localStorage.setItem('defaultStyle', style);
}

function getDefaultStyle() {
    var defaultStyle = localStorage.getItem('defaultStyle');
    if (!defaultStyle) {
        localStorage.setItem('defaultStyle', 'css/style.css');
        defaultStyle = localStorage.getItem('defaultStyle');
    }
    return defaultStyle;
};
