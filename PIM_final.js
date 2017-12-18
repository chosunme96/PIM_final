var count=0;
var name;
var description;
console.log("helloworld");

function checkingfunction(id){
  console.log("loading function");
  console.log(id);

}

function createMemo(){
  var memolist=document.getElementsByClassName("memolist");
  var memo = document.createElement("button");
  memo.className="memobutton";
  memolist[0].appendChild(memo);
}

function check(){
  var id=document.getElementById("userid").value;
  var password=document.getElementById("userpswrd").value;
  if(id=='testid' && password=='testpswrd'){
    document.getElementById("test").innerHTML="what";
    window.open("createMoneyBook.html");
  }else{
    alert("Error Password or Username");
  }
}


function allowDrop(ev){
  ev.preventDefault();
}
function drag(ev){
  ev.dataTransfer.setData("text", ev.target.id);
}

function addTrans(){
 var category=document.getElementById('transCategory').value;
 console.log(category);
 var transdate=document.getElementById('transDate').value;
 console.log(transdate);
  var amount = document.getElementById('transAmount').value;
  console.log(amount);
  var file=document.getElementById('transReceipt').image;
}

function askAuthority(){
  document.getElementById("authority").classList.remove("greenbuttons");
  alert("관리 승인 요청을 보냈습니다. My Money Book List에서 확인하실 수 있습니다.");
}

function searchMoneyBook(){
  var code=document.getElementById("mbcode").value;
  if(code=="0522"){
    document.getElementById("addCode").innerHTML="2017년 다카포";
    document.getElementById("searchModal").style.display="none";
  }else{
    alert("그런 가계부 없습니다.");
  }
}

function sendND(){
  name=document.getElementById("mbname").value;
  description=document.getElementById("mbdescription").value;
  document.getElementById("newMBName").innerHTML=name;
  document.getElementById("newMBDescription").innerHTML=description;
  console.log(name+description);
}



function closeMoneyFlow(){
  var modal=document.getElementById("MoneyFlow");
  modal.style.display="none";
}

function drop(ev){
  ev.preventDefault();
  console.log(ev.target.id);
  var modal=document.getElementById("MoneyFlow");
  var span=document.getElementsByClassName("close2")[0];

  modal.style.display="block";

  if(ev.target.id=="earning"){
    console.log("earning");
    document.getElementById("transType").innerHTML="수입 내역 추가";

  }else if(ev.target.id=="spending"){
    console.log("spending");
    document.getElementById("transType").innerHTML="지출 내역 추가";
  }
  console.log("what");
}


$(document).ready(function(){
  $(".memobutton").click(function(){
    if($("#memobox").is(":visible")){
      $("#memobox").slideUp();
    }else{
      $("#memobox").slideDown();
    }
  });
});


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
console.log(myNodelist.length);
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

//Problem Place
// Add a "checked" symbol when clicking on a list item
window.addEventListener("load", () => {
  var list = document.getElementById('myUL');
  console.log(list);
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
});

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").insertBefore(li,document.getElementById("myUL").firstChild);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function setMemoType(memot){
  if(memot.id=="normalmemo"){
    document.getElementById("normalmemo").checked=true;
    document.getElementById("checklist").checked=false;
    document.getElementById("memotype").innerHTML="메모";
    document.getElementById("myUL").style.display="none";
    document.getElementById("checklistpart").style.display="none";
    document.getElementById("memopart").style.display="block";
  }else if(memot.id=="checklist"){
    document.getElementById("checklist").checked=true;
    document.getElementById("normalmemo").checked=false;
    document.getElementById("memotype").innerHTML="체크 리스트 ";
    document.getElementById("myUL").style.display="block";
    document.getElementById("checklistpart").style.display="block";
    document.getElementById("memopart").style.display="none";
  }

}
