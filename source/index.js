const plus = document.getElementsByClassName('plus')[0],
    minus = document.getElementsByClassName('minus')[0],
    inputField = document.getElementsByClassName('inputField')[0],
    lifo = document.getElementsByClassName('list')[0],
    li = document.getElementsByClassName('li');

let savedLifo = sessionStorage.getItem('lifo');

if (savedLifo) {
    lifo.innerHTML = savedLifo;
}

const saveLifoInStorage = () => {
    sessionStorage.setItem('lifo', lifo.innerHTML);
}

const createHtmlComponent = (tag, content, className) => {
    const newElement = document.createElement(tag),
        textNode = document.createTextNode(content);
    newElement.appendChild(textNode);
    newElement.className = className;
    return newElement;
}

plus.onclick = () => {
    if (li.length === 19)
        return alert('Oops! Maximum queue size reached, cause I\'m 19.');
    if (!inputField.value)
        return alert('Enter some text to enqueue it!');
    lifo.appendChild(createHtmlComponent('li', inputField.value, 'li'));
    saveLifoInStorage();
    inputField.value = null;
    inputField.focus();
}

minus.onclick = () => {
    if (li.length === 0)
        return alert('Queue is empty. Nothing to delete.');
    lifo.removeChild(lifo.firstElementChild);
    saveLifoInStorage();
    inputField.focus();
}