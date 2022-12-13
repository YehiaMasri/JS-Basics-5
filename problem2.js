var x = document.getElementById("h")
const inputField = document.getElementById("name"); 
x.onclick = ()=> {
    let name = inputField.value;
    if(name=="bob"){
    alert("Hello " + name);
    inputField.value = "";
}else if (name=="alice"){
  alert("Hello " + name);
  inputField.value = ""; 
}
}
