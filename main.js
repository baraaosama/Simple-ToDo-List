let mylis = document.getElementsByTagName("li");
for (let i = 0; i < mylis.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    mylis[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var li = this.parentElement;
        li.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);
let btn = document.querySelector("button");


function newElement() {
    let li = document.createElement("li");
    let inputValue = document.querySelector("input").value;
    let txtnode = document.createTextNode(inputValue);
    li.appendChild(txtnode);
    if (inputValue == "") {
        alert("You Don't Write something")
    } else {
        document.querySelector("ul").appendChild(li)
    }
    document.querySelector("input").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let myli = this.parentElement;
            myli.style.display = "none";
        }
    }
}
