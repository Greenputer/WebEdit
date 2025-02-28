let fontSize = 9;
const fontSizes = [6,8,9,10,11,12,14,16,18,20,22,24,26,28,32,36,41,48,60,72,96,120,144,200,300,400,600] // 24
let hidden = false;
let fileName;
function updateFontSize(step){
    if((fontSize + step) >= fontSizes.length || (fontSize + step) < 0){
        return;
    }

    fontSize += step;
    document.getElementById("inputBox").style.fontSize = fontSizes[fontSize] + "px";
    document.getElementById("zoomLabel").innerHTML = fontSizes[fontSize];
    //console.log("Font size changed to, Array num: " + fontSize + ", Actual Size: "+ fontSizes[fontSize]);
}

function toggleHide(){
    if (document.getElementById('children').style.opacity > 0){
        hidden = true;
        document.getElementById('burger').style.marginTop = "-45px";
        document.getElementById('burger').style.lineHeight = "54px";
        document.getElementById('children').style.opacity = 0;
        setTimeout(actuallyHide, 300);

    }
    else{
        hidden = false;
        document.getElementById("inputBox").style.height = "calc(100vh - 72px)";
        document.getElementById("inputBox").style.maxHeight = "calc(100vh - 72px)";
        setTimeout(moveTextDown, 300);
        setTimeout(actuallyHide,720);
    }
}

function actuallyHide(){
    if(!hidden){
    document.getElementById('children').style.display = 'inline';
    setTimeout(noWereReallyDoinIt, 20);
    }
    else{
        document.getElementById("void").style.transition = "0ms";
        document.getElementById("void").style.height = "53px";
        setTimeout(moveTextUp,100);
        document.getElementById('children').style.display = 'none';

    }
}

function noWereReallyDoinIt(){
    console.log("we did it");
    document.getElementById('children').style.transition = "0ms";
    document.getElementById('children').style.opacity = 0;
    document.getElementById('children').style.transition = "500ms";
    document.getElementById('children').style.opacity = 1;
}

function moveTextUp(){
    document.getElementById("void").style.transition = "500ms";
    document.getElementById("void").style.height = "0px";
    setTimeout(resizeTextUp,300);
}

function resizeTextUp(){
    document.getElementById("inputBox").style.height = "calc(100vh - 30px)";
    document.getElementById("inputBox").style.maxHeight = "calc(100vh - 30px)";
}

function moveTextDown(){
    document.getElementById("void").style.height = "53px";
    setTimeout(unhideButtons,500);
}

function unhideButtons(){
    document.getElementById('burger').style.marginTop = "0px";
    document.getElementById('burger').style.lineHeight = "34px";
   // setTimeout(actuallyHide,10);
    document.getElementById('children').style.opacity = 1;
}

function dl_as_file_Blob(filename_to_dl, data_to_dl) {
    let blobx = new Blob([data_to_dl], { type: 'text/plain' }); // ! Blob
    let elemx = window.document.createElement('a');
    elemx.href = window.URL.createObjectURL(blobx); // ! createObjectURL
    elemx.download = filename_to_dl;
    elemx.style.display = 'none';
    document.body.appendChild(elemx);
    elemx.click();
    document.body.removeChild(elemx);
}

function newTab(){
    window.open(window.location.href, '_blank').focus();
}

function onNewPress(){
    document.getElementById("warningDialog").style.opacity = "0";
    document.getElementById("warningDialog").style.display = "inline";
    setTimeout(openNewDialog,10);
}

function cancelNew(){
    document.getElementById("warningDialog").style.opacity = "0";
    setTimeout(closeNewDialog,200);
}

function confirmNew(){
    document.getElementById("inputBox").value = "";
    document.getElementById("warningDialog").style.opacity = "0";
    setTimeout(closeNewDialog,200);
}

function closeNewDialog(){
    document.getElementById("warningDialog").style.display = "none";

}
function openNewDialog(){
        document.getElementById("warningDialog").style.transition = "0ms";
        document.getElementById("warningDialog").style.opacity = "0";
        document.getElementById("warningDialog").style.transition = "200ms";
        document.getElementById("warningDialog").style.opacity = "1";
}

function onSavePress(){
    document.getElementById("saveDialog").style.opacity = "0";
    document.getElementById("saveDialog").style.display = "block";
    setTimeout(openSaveDialog,10);

}

function openSaveDialog(){
    document.getElementById("saveDialog").style.transition = "0ms";
    document.getElementById("saveDialog").style.opacity = "0";
    document.getElementById("saveDialog").style.transition = "200ms";
    document.getElementById("saveDialog").style.opacity = "1";
    if(!fileName){
        document.getElementById("saveInput").value = "file" + Math.floor(Math.random() * 10000) + ".txt";
    }
    else{
        document.getElementById("saveInput").value = fileName;
    }

}
function confirmSave(){
    fileName = document.getElementById("saveInput").value;
    dl_as_file_Blob(fileName, document.getElementById("inputBox").value);
    closeSaveDialog();
}

function cancelSave(){
    closeSaveDialog();
}

function closeSaveDialog(){
    document.getElementById("saveDialog").style.opacity = "0";
    setTimeout(actuallyDisableSaveDialog,200);
}

function actuallyDisableSaveDialog(){
    document.getElementById("saveDialog").style.display = "none";
}
