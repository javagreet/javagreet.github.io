function showBGColor(){
   if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
       var td=event.srcElement;
       var tr=td.parentElement;
       tr.style.backgroundColor = "navy";
       var tds=tr.cells;
       for (var i = 0; i < tds.length; i++) {
           tds[i].style.color="#FF0033";
       }
   }
}

function cleanBGColor(){
    if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
        var td = event.srcElement;
        var tr=td.parentElement;
        tr.style.backgroundColor="whitesmoke";
        var tds=tr.cells;
        for (var i = 0; i < tds.length; i++) {
            tds[i].style.color="black";
        }
    }
}

function showHand(){
    if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
        var td=event.srcElement;
        td.style.cursor="hand";
    }
}