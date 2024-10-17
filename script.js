// Initialize CodeMirror editors for HTML, CSS, and JavaScript
let htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-editor"), {
    mode: "htmlmixed",
    lineNumbers: true,
    theme: "default"
});

let cssEditor = CodeMirror.fromTextArea(document.getElementById("css-editor"), {
    mode: "css",
    lineNumbers: true,
    theme: "default"
});

let jsEditor = CodeMirror.fromTextArea(document.getElementById("js-editor"), {
    mode: "javascript",
    lineNumbers: true,
    theme: "default"
});

// Function to switch between HTML, CSS, and JS tabs
function switchTab(tab) {
    if (tab === 'html') {
        document.getElementById("html-editor").parentElement.style.display = 'block';
        document.getElementById("css-editor").parentElement.style.display = 'none';
        document.getElementById("js-editor").parentElement.style.display = 'none';
    } else if (tab === 'css') {
        document.getElementById("html-editor").parentElement.style.display = 'none';
        document.getElementById("css-editor").parentElement.style.display = 'block';
        document.getElementById("js-editor").parentElement.style.display = 'none';
    } else {
        document.getElementById("html-editor").parentElement.style.display = 'none';
        document.getElementById("css-editor").parentElement.style.display = 'none';
        document.getElementById("js-editor").parentElement.style.display = 'block';
    }
}

// Function to run the code and display the result in the iframe
function runCode() {
    let htmlCode = htmlEditor.getValue();
    let cssCode = "<style>" + cssEditor.getValue() + "</style>";
    let jsCode = "<script>" + jsEditor.getValue() + "</script>";
    let outputFrame = document.getElementById("output");
    outputFrame.srcdoc = htmlCode + cssCode + jsCode;
}
