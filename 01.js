window.addEventListener("load", function(){
    let saved = findCookieValue("page-color", "font-size");
    console.log(saved);
    if (saved){
        document.body.style.backgroundColor = saved[1];
        document.body.style.fontSize = saved[0]+"px";
    }});

document.getElementById("saveButton").addEventListener("click", function () {
    let selectedColor = getElement("color");
    let fontSize = document.getElementById("num").value;
    document.cookie = "page-color=" + encodeURIComponent(selectedColor);
    document.cookie = "font-size=" + encodeURIComponent(fontSize);
    document.body.style.background = selectedColor;
    document.body.style.fontSize = fontSize+"px";
    console.log(selectedColor);
    console.log(document.getElementById("num").value);
    console.dir(document.cookie);
});
function getElement(name) {
    let element = document.getElementsByName(name);
    for (i=0; i<element.length; i++){
        if (element[i].selected) return element[i].value;
    }
}
let arr = [];
function findCookieValue(cookieName, xSize) {
    let allcookies = document.cookie;
    let pos = allcookies.indexOf(cookieName + "=");
    let posSize = allcookies.indexOf(xSize + "=");
    if (posSize !== 1){
        let startSize = posSize + xSize.length + 1;
        let endSize = allcookies.indexOf(";", startSize);
        if (endSize === -1) endSize =allcookies.length;
        let valueSize = allcookies.substring(startSize, endSize);
        valueSize = decodeURIComponent(valueSize);
        arr.push(valueSize);
        console.log(valueSize);
    }

    if (pos !== -1) {
        let start = pos + cookieName.length + 1;
        let end = allcookies.indexOf(";", start);
        if (end === -1) end = allcookies.length;
        let value = allcookies.substring(start, end);
        value = decodeURIComponent(value);
        arr.push(value);
        return arr;
    }
}
num.addEventListener("keypress", function (e) {
    console.log(!String.fromCharCode(e.charCode).match(/^[0-9]$/))
    if (!String.fromCharCode(e.charCode).match(/^\d+$/)){
        e.preventDefault();
    }
}, true);