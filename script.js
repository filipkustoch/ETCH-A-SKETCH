let container = document.getElementById("grid-container");

function createGrid(rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    for (var i = 0; i < (rows * columns); i++) {
        let item = document.createElement("div");
        item.addEventListener("mouseover", function (event) {
            // highlight the mouseenter target
            event.target.style.backgroundColor = "purple";
        
        });
        container.appendChild(item).className = "grid-item";
    };

};






createGrid(16, 16);