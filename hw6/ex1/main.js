function shuffle() {
    var box = document.getElementById("box");
    var elementsArray = Array.prototype.slice.call(box.getElementsByClassName('element'));
    elementsArray.forEach(function (element) {
        box.removeChild(element);
    })

    shuffleArray(elementsArray);

    elementsArray.forEach(function (element) {
        box.appendChild(element);
    })
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

setInterval(shuffle, 1000);