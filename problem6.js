var table = document.getElementById("multi-table");
for(let i = 1 ; i<=12 ; i++){
    var p = document.createElement("p");
    var title = document.createTextNode((i) + ": ");
    p.appendChild(title);
    for(let j = 1 ; j<=12; j++){
        var number = document.createTextNode((i*j) + " ");
        p.appendChild(number);
        table.appendChild(p);
    }
}
