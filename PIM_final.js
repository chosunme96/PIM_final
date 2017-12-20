var count=0;
var name;
var description;
var balance=0;
var type="earning";

//checking the id, password when log in
function check(){
  var id=document.getElementById("userid").value;
  var password=document.getElementById("userpswrd").value;
  if(id=='testid' && password=='testpswrd'){
    document.getElementById("login").innerHTML="what";
    window.open("createMoneyBook.html");
  }else{
    alert("Error Password or Username");
  }
}

//drag & drop functions for earnings/spending action.
//drag the coin towards the piggy bank, and the 'earnings' page will pop up
//drag the coins towards the dotted red circle, and the 'spendings' page will pop up
function allowDrop(ev){
  ev.preventDefault();
}
function drag(ev){
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
  ev.preventDefault();
  var modal=document.getElementById("MoneyFlow");
  var span=document.getElementsByClassName("close2")[0];

  modal.style.display="block";

  if(ev.target.id=="earning"||ev.target.id=="earns"){
    type="earning";
    document.getElementById("transType").innerHTML="Add Earnings";
  }else if(ev.target.id=="spending"){
    document.getElementById("transType").innerHTML="Add Spendings";
    type="spending";
  }
}

//search for a money book another person is managing
function searchMoneyBook(){
  var code=document.getElementById("mbcode").value;
  if(code=="0522"){
    document.getElementById("addCode").innerHTML="2017년 다카포";
    window.open("OthersMoneyBook.html", this);
    document.getElementById("searchModal").style.display="none";
  }else{
    alert("그런 가계부 없습니다.");
  }
}


//ask authority to manage the Money Book
function askAuthority(){
  document.getElementById("authority").classList.remove("greenbuttons");
  alert("관리 승인 요청을 보냈습니다. My Money Book List에서 확인하실 수 있습니다.");
}

//sending the name and description of the new-made MoneyBook
function sendND(){
  name=document.getElementById("mbname").value;
  description=document.getElementById("mbdescription").value;
  document.getElementById("newMBName").innerHTML=name;
  document.getElementById("newMBDescription").innerHTML=description;
}


//click X on the earnings/spending page, and the page disappears
function closeMoneyFlow(){
  var modal=document.getElementById("MoneyFlow");
  modal.style.display="none";
}

//Writing Earnings/Spendings and it will be added to the history list
function addTrans(){
  var category=document.getElementById('transCategory').value;
  var transDate=document.getElementById('transDate').value;
  var amount = document.getElementById('transAmount').value;
  var file=document.getElementById('transReceipt').image;
  var modal=document.getElementById("MoneyFlow");
  modal.style.display="none";

  var translist=document.getElementsByClassName("translist");
  var transrow = document.createElement("tr");
  var transtype=document.createElement("td");
  var transcontent=document.createElement("td");
  var transdate=document.createElement("td");
  var transamount=document.createElement("td");
  var transReceipt=document.createElement("img");

  if(type=="earning"){
    balance+=amount;
  }else if(type=="spending"){
    balance-=amount;
  }

  transtype.appendChild(document.createTextNode(type));
  transcontent.appendChild(document.createTextNode(category));
  transdate.appendChild(document.createTextNode(transDate));
  transamount.appendChild(document.createTextNode(amount));
  transReceipt.appendChild(document.createTextNode(file));
  transrow.appendChild(transtype);
  transrow.appendChild(transcontent);
  transrow.appendChild(transdate);
  transrow.appendChild(transamount);
  transrow.appendChild(transReceipt);
  translist[0].appendChild(transrow);
  document.getElementById("balance").innerHTML="Balance : "+balance;
}

//click the white memo box, and a new memo page will slide down
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

//create a new Memo after clicking 'add' button
function createMemo(){
  var memolist=document.getElementsByClassName("memolist");
  var memo = document.createElement("button");
  var text=document.createTextNode("contents of memo");
  memo.className="memobutton";
  memo.appendChild(text);
  memolist[0].appendChild(memo);
  $("#memobox").slideUp();
}

//change memo type by the status checked(memo or checklist)
function setMemoType(memot){
  if(memot.id=="normalmemo"){
    document.getElementById("normalmemo").checked=true;
    document.getElementById("checklist").checked=false;
    document.getElementById("memotype").innerHTML="Memo";
    document.getElementById("myUL").style.display="none";
    document.getElementById("checklistpart").style.display="none";
    document.getElementById("memopart").style.display="block";
  }else if(memot.id=="checklist"){
    document.getElementById("checklist").checked=true;
    document.getElementById("normalmemo").checked=false;
    document.getElementById("memotype").innerHTML="Check List";
    document.getElementById("myUL").style.display="block";
    document.getElementById("checklistpart").style.display="block";
    document.getElementById("memopart").style.display="none";
  }
}
