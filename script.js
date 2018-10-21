window.onload=function(){setTimeout(showPopup,2000)};

function showPopup()
{
    var popup = document.getElementById('popup-container');
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popup-container');
    popup.style.display = 'none';
}
function modePsychedique(){
    var mode = document.getElementById('mode-psychedique');
    var defaultStyle = document.getElementsByTagName('body')[0].style;
    var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (mode.value =='Activate'){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'magenta';
        document.getElementsByTagName('body')[0].style.color = 'blue';
        document.getElementsByTagName('body')[0].style.fontFamily = 'papyrus';
        for (val of headings)
        {
            val.style.color = 'green';
            val.style.fontFamily = 'Comic Sans';
        }
        mode.value = 'Disable';
    }else{
        document.getElementsByTagName('body')[0].style = defaultStyle;
        mode.value ='Activate';
    }
}
