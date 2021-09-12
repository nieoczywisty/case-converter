let upperCaseButton;
let lowerCaseButton;
let properCaseButton;
let sentenceCaseButton;
let saveButton;
let textArea;

window.onload = function () {
    upperCaseButton = document.getElementById("upper-case");
    lowerCaseButton = document.getElementById("lower-case");
    properCaseButton = document.getElementById("proper-case");
    sentenceCaseButton = document.getElementById("sentence-case");
    textArea = document.getElementById("textarea");
    saveButton = document.getElementById("save-text-file");

    upperCaseButton.addEventListener("click", toUpperCase);
    lowerCaseButton.addEventListener("click", toLowerCase);
    properCaseButton.addEventListener("click", toProperCase);
    sentenceCaseButton.addEventListener("click", toSentenceCase);
    saveButton.addEventListener("click",saveFile);
}

function toUpperCase() {
    let textString = textArea.value.toUpperCase();
    textArea.value = textString;

}

function toLowerCase() {
    let textString = textArea.value.toLowerCase();
    textArea.value = textString;

}

function toProperCase() {
    let textString = textArea.value.toLowerCase().replace(/\s+\w/g,
        function(m){
        return m.toUpperCase();
    });

    textArea.value = textString.replace(textString.charAt(0),textString.charAt(0).toUpperCase());
}

function toSentenceCase() {

        let textString = textArea.value.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,
            function(c){
            return c.toUpperCase()
        });
        textArea.value = textString;
}
function saveFile(){

        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textArea.value));
        element.setAttribute('download', "text");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
}
