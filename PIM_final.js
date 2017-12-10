var count=0;

var user(id, pswrd){
  this.id=id;
  this.pswrd=pswrd;
}

function check(){
  var id=document.getElementById("userid").value;
  var password=document.getElementById("userpswrd").value;
  if(id=='testid' && password='testpswrd'){
    window.open("PIM_final.html");
  }else{
    alert("Error Password or Username");
  }
}

function createMoneyBook(){



}
