function sumAll(){
  var n = document.getElementById("number").value
  var result=0;
  for(let i=1 ; i<=n ;i++){
      if(i%3 === 0 || i%5 === 0){
          result+= i;
      }
  }
  alert("The Result is " + result);
  
}