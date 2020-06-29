window.addEventListener("load", function(){
    let saved = findCookieValue("page-color", "font-size");
    console.log(saved);
    if (saved){
        document.body.style.backgroundColor = saved[1];
        document.body.style.fontSize = saved[0]+"px";
    }}); //если при загрузки есть куки

document.getElementById("saveButton").addEventListener("click", function () {
    let selectedColor = getElement("color");
    let fontSize = document.getElementById("num").value;
    document.cookie = "page-color=" + encodeURIComponent(selectedColor);
    document.cookie = "font-size=" + encodeURIComponent(fontSize);
    document.body.style.background = selectedColor; //чтобы сразу
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
    let pos = allcookies.indexOf(cookieName + "="); //нашло на каком инексе пейдж-колор=
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
    // Если cookie с указанным именем найден, извлечь его значения.
    if (pos !== -1) {
        let start = pos + cookieName.length + 1; //выделили всб строку куки до пейдж-колор= что бы взять значения потом
        let end = allcookies.indexOf(";", start); //не будет точки с запятой если запись последняя
        if (end === -1) end = allcookies.length; //находим где конец значений
        let value = allcookies.substring(start, end); //от начала до конца строку віделили со значением
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