var x = document.getElementById("h")
const inputField = document.getElementById("name"); 
x.onclick = ()=> {
    let name = inputField.value;
    alert("Hello " + name);
    inputField.value = "";
}