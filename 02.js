window.addEventListener("load", function(){
    document.body.style.backgroundColor = window.localStorage.getItem("key1");
    document.body.style.fontSize = window.localStorage.getItem("key2");
});


document.getElementById("saveButton").addEventListener("click", function () {
    let selectedColor = getElement("color");
    let fontSize = document.getElementById("num").value;
    window.localStorage.key1 = selectedColor;
    window.localStorage.key2 = fontSize + "px";
    document.body.style.backgroundColor = window.localStorage.getItem("key1");
    document.body.style.fontSize = window.localStorage.getItem("key2");

})
function getElement(name) {
    let element = document.getElementsByName(name);
    for (i=0; i<element.length; i++){
        if (element[i].selected) return element[i].value;
    }
}