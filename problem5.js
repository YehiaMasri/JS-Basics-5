function operation(){
  var n = document.getElementById("number").value;
  var sign = document.getElementById("sign").value;
  var result=0;
  if(sign === "sum"){
      for(let i=1 ; i<=n ;i++){
      result+= i;
      }
  }else{
      result=1;
      for(let i=1 ; i<=n ;i++){
      result *= i;
      }
  }
  
  alert("The Result is " + result);
  
}