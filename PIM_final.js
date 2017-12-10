var count=0;
function check(form){
  if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd"){
    window.open('PIM_final.html');
  }else{
    alert("Error Password or Username");
  }
}

function newMoneyBook(){
  count++;
}
