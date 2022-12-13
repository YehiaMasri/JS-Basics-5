function sum(){
  var n= document.getElementById("number").value;
  let res=0;
  for(let i = 0;i<=n ;i++){
   res+=i;
   
  }
  alert("the sum is: "+ res)
}