let container = document.getElementById("grid-container");

function createGrid(rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    for (var i = 0; i < (rows * columns); i++) {
        let item = document.createElement("div");
        item.addEventListener("mouseover", ColorChange);
        container.appendChild(item).className = "grid-item";
    };

};

function ColorChange(event){
    let color = document.getElementById("button-green").value;
    event.target.style.backgroundColor = color;
}
createGrid(16, 16);