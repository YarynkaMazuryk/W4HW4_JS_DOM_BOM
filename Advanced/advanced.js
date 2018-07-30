const button_prev = document.querySelector('#gallery .prev');
const button_next = document.querySelector('#gallery .next');
const images = document.querySelectorAll('#gallery .photos img');
let i = 0;
function localStorageCheck () {
    const storageDataUrl = localStorage.getItem('data-url');
    if(window.location.hash === '' && !storageDataUrl) {
         setNewLocalstorage(1);
        setImg(1);
    }else {
        setImg(storageDataUrl);
    }
}
function setImg (data) {
    images.forEach(function(el){
        let thisEl = el.getAttribute('data-url');
        if (thisEl == data) {
            el.classList = 'showed'
            window.location.hash = data;
        } else {
            el.classList = ''
        }
    })
}
function setNewLocalstorage (attribute) {
    localStorage.setItem('data-url', attribute);
}
function previous() {
    images[i].className = '';
    i--;
    if (i <= 0) {
        i = images.length - 1;
    }
    images[i].className = "showed";
    let attribute = images[i].getAttribute('data-url');
    setNewLocalstorage(attribute);    
}
function next() {
    images[i].className = "";
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].className = "showed";
    console.log(images[i].getAttribute('data-url'));
    let attribute = images[i].getAttribute('data-url');
    window.location.hash = attribute;
    setNewLocalstorage(attribute);    
}
localStorageCheck ();
button_prev.addEventListener('click', previous);
button_next.addEventListener('click', next);

