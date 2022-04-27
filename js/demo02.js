function $(id){
    return document.getElementById(id);
}

window.onload=function (){
    var fruitTbl=$("tbl_fruit");
    var rows=fruitTbl.rows;
for (var i = 0; i < rows.length; i++) {
    var tr= rows[i];
    tr.onmouseover=showBGColor;
    tr.onmouseout=cleanBGColor;
    var tds =tr.cells;
    var img = tds[4].firstChild;
    if (img&&img.tagName=="IMG"){
        img.onclick=deleteDate;
    }
    if (i!=0) {
        tds[4].onmouseover = showHand;
    }
    if (i!=0&&i!=4){

        for (var j = 0; j <tds.length; j++) {
            if (j!=0)
            tds[j].onclick=editPrice;
            tds[j].onkeydown=ckInput;
        }
    }
}

var fruitAdd = $("add_fruit");
var rows1 = fruitAdd.rows;
var tr1 = rows1[0];
    for (var i = 0; i < tr1.length; i++) {

    }

    var submit = $("sunfirm");
        submit.onclick=moreData;
}

function moreData(){
    if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
        var tr = event.parent;
        var fruitTbl=$("tbl_fruit");
        var htmlTableRowElement = fruitTbl.insertRow();
    }
}

function ckInput(){
    var kc = event.keyCode;
    console.log(kc);
    if (!((kc>=48&&kc<=57)||kc==8||kc==13)){
      event.returnValue=false;
    }
    if (kc==32||kc==13){
        event.srcElement.blur();
    }
}

function deleteDate(){
    if (event&&event.srcElement&&event.srcElement.tagName=="IMG"){
       if (window.confirm("是否删除当前库存记录？")) {
           var tr = event.srcElement.parentElement.parentElement;
           var fruitTbl = $("tbl_fruit");
           fruitTbl.deleteRow(tr.rowIndex);
           updateZJ(tr);
       }
    }

}

function editPrice(){
    if (event&&event.srcElement&&event.srcElement.tagName=="TD"){
        var priceTD=event.srcElement;
        if (priceTD.firstChild&&priceTD.firstChild.nodeType==3){
            var oldPrice=priceTD.innerText;
            priceTD.innerHTML="<input type='text' size='4' />";
            var input =priceTD.firstChild;
            if (input.tagName=="INPUT"){
                input.value=oldPrice;
                input.select();
                input.onblur=updatePrice;
            }
        }
    }
}

function updatePrice(){
    if (event&&event.srcElement&&event.srcElement.tagName=="INPUT"){
        var input =event.srcElement;
        var newPrice=input.value;
        var priceTD=input.parentElement;
        priceTD.innerText=newPrice;
        updateXJ(priceTD.parentElement);
    }
}

function updateXJ(tr){
    if (tr&&tr.tagName=="TR"){
        var tds=tr.cells;
        var price = tds[1].innerText;
        var count = tds[2].innerText;

        var xj=parseInt(price)*parseInt(count);
        tds[3].innerText=xj;
        updateZJ();
    }
}

function updateZJ(tr){
   var fruitTlb=$("tbl_fruit");
   var rows = fruitTlb.rows;
   var prices=0;
    for (var i = 0; i < rows.length; i++) {
        if (i!=0&&i!=rows.length-1) {
            var innerText = rows[i].cells[3].innerText;
            prices =prices + parseInt(innerText);
        }
    }
    rows[rows.length-1].cells[1].innerText=prices;
}


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