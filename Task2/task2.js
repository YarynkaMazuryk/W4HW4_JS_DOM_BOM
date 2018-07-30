const anchor = document.getElementById("w3r");
const requiredAttrs = ['type', 'hreflang', 'rel', 'target', 'href'];
function getAttributes() {
    let valueAttributes = [];
    for (let i = 0; i < requiredAttrs.length; i++) {
        valueAttributes[i] = anchor.getAttribute(requiredAttrs[i]);
    }
    return console.log (valueAttributes);  
}





        



