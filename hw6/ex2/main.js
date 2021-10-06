let data = {
    "Меблі": {
        "стіл": {},
        "крісло": {}
    },

    "Одяг": {
        "Верхній одяг": {
            "пальто": {},
            "куртка": {}
        },
        "Спецодяг": {
            "медичний": {},
            "робочий": {}
        }
    }
};

function fillInnerHtml(obj) {
    let box = document.getElementById('box');

    let strResult = '<ul>';

    for (let prop in obj) {         //1
        if (obj.hasOwnProperty(prop)) {

            strResult += liWrap(prop);

            if (isObject(obj[prop])) {
                strResult += '<ul>';

                for (let subProp in obj[prop]) {        //2
                    if (obj[prop].hasOwnProperty(subProp)) {

                        strResult += liWrap(subProp);

                        if (isObject(obj[prop][subProp])) {
                            strResult += '<ul>';

                            for (let subSubProp in obj[prop][subProp]) {        //3
                                strResult += liWrap(subSubProp);
                            }
                            strResult += '</ul>';
                        }
                    }
                }
                strResult += '</ul>';
            }
        }
    }

    strResult += '</ul>';

    box.innerHTML = strResult;
}

function liWrap(param) {
    return '<li>' + param + '</li>'
}

function isObject(value) {
    return typeof value === 'object' && !Array.isArray(value) && value !== null;
}

fillInnerHtml(data);