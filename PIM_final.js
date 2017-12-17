var count=0;
console.log("helloworld");

function checkingfunction(id){
  console.log("loading function");
  console.log(id);

}

var mb=[];
function moneyBook(name, description, date, color){
  this.name=name;
  this.description=description;
  this.date=date;
  this.color=color;
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

function createMoneyBook(){
  var name=document.getElementById("mbname").value;
  var description=document.getElementById("mbdescription").value;
  var date=document.getElementById("mbdate").value;
  var color=document.getElementById("mbcolor").value;
  mb.push(new moneyBook(name, description, date, color));
}

function changestatus(){
  var status=document.getElementById("earning");
  if(status.innerHTML=="수입") {
    status.innerHTML="지출";
  }else {
    status.innerHTML="수입";

  }
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

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

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


/*
// Write JavaScript here
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
};
*/
