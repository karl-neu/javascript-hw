function fillDom(obj) {
    let box2 = document.getElementById('box2');

    let ul = document.createElement('ul');

    for (let prop in obj) {             //1
        if (obj.hasOwnProperty(prop)) {

            let li = document.createElement('li');
            li.innerText = prop;

            if (isObject(obj[prop])) {

                let subUl = document.createElement('ul');

                for (let subProp in obj[prop]) {            //2

                    if (obj[prop].hasOwnProperty(subProp)) {

                        let subLi = document.createElement('li');
                        subLi.innerText = subProp;

                        if (isObject(obj[prop][subProp])) {

                            let subSubUl = document.createElement('ul');

                            for (let subSubProp in obj[prop][subProp]) {            //3

                                if (obj[prop][subProp].hasOwnProperty(subSubProp)) {

                                    let subSubLi = document.createElement('li');
                                    subSubLi.innerText = subSubProp;
                                    subSubUl.appendChild(subSubLi);
                                }
                            }
                            subLi.appendChild(subSubUl);
                        }
                        subUl.appendChild(subLi);
                    }
                }
                li.appendChild(subUl);
            }
            ul.appendChild(li);
        }
    }
    box2.append(ul);
}

document.body.onload = fillDom(data);