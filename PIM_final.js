var count=0;

var user(id, pswrd){
  this.id=id;
  this.pswrd=pswrd;
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
  var status=document.getElementsByClassName("earning");
  if(status.value=="수입") status.value="지출";
  else status.value="수입";
}




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
