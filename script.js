document.addEventListener("DOMContentLoaded", function() {
    var htmlEditor = CodeMirror.fromTextArea(document.getElementById("htmlEditor"), {
        mode: "htmlmixed",
        lineNumbers: true,
        theme: "default",
    });
    
    var cssEditor = CodeMirror.fromTextArea(document.getElementById("cssEditor"), {
        mode: "css",
        lineNumbers: true,
        theme: "default",
    });
    
    var jsEditor = CodeMirror.fromTextArea(document.getElementById("jsEditor"), {
        mode: "javascript",
        lineNumbers: true,
        theme: "default",
    });
    
    document.getElementById("runBtn").addEventListener("click", function() {
        var html = htmlEditor.getValue();
        var css = "<style>" + cssEditor.getValue() + "</style>";
        var js = "<script>" + jsEditor.getValue() + "<\/script>";
        var output = document.getElementById("output");
        output.contentDocument.body.innerHTML = html + css + js;
    });

    document.getElementById("newFileBtn").addEventListener("click", function() {
        var newFileName = prompt("Enter new file name:");
        if (newFileName) {
            var fileList = document.getElementById("fileList");
            var newFile = document.createElement("li");
            newFile.textContent = newFileName;
            newFile.onclick = function() {
                alert("Open file: " + newFileName);
            };
            fileList.appendChild(newFile);
            document.getElementById("fileManager").style.display = "block";
        }
    });

    document.getElementById("saveFileBtn").addEventListener("click", function() {
        alert("Saving file... (this is a stub for now)");
    });
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByTagName("button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
