const body = document.querySelector("body");
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.fontFamily = "sans-serif";
body.style.margin = "0"; 
body.style.flexDirection = "column";

const h1 = document.createElement("h1");
h1.textContent = "ETCH-A-SKETCH";
h1.style.color = "lightpink";
body.appendChild(h1);

const btn = document.createElement("button");
btn.textContent = "Number of Squares";
btn.style.color = "white";
btn.style.backgroundColor = "lightpink";
btn.style.padding = "14px 20px";
btn.style.border = "none";
btn.style.borderRadius = "19px";
btn.style.fontWeight = "bold";
body.appendChild(btn);

const btn2 = document.createElement("button");
btn2.textContent = "Reset";
btn2.style.color = "white";
btn2.style.backgroundColor = "lightpink";
btn2.style.padding = "14px 20px";
btn2.style.border = "none";
btn2.style.borderRadius = "19px";
btn2.style.fontWeight = "bold";
btn2.style.marginTop = "9px";
body.appendChild(btn2);

let numGrid = 16; 

btn2.addEventListener('click', function() {
    resetGrid();
    createGrid(numGrid); 
});

btn.addEventListener('click', function() {
    let input = prompt("Enter the number of squares per side (maximum 100):");
    numGrid = parseInt(input);
    if (isNaN(numGrid) || numGrid <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }
    numGrid = Math.min(numGrid, 100); 
    resetGrid();
    createGrid(numGrid);
});

const gridContainer = document.createElement('div');
gridContainer.style.display = 'flex';
gridContainer.style.flexWrap = 'wrap';
gridContainer.style.width = '80vmin'; 
gridContainer.style.height = '80vmin'; 
gridContainer.style.marginTop = '20px'; 
gridContainer.style.border = '2px solid lightpink';
body.appendChild(gridContainer);

function createGrid(num) {
    gridContainer.innerHTML = '';

    const gridSize = 100 / num + '%';

    for (let i = 0; i < num * num; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = gridSize;
        div.style.height = gridSize;
        div.style.boxSizing = 'border-box';
        div.style.border = '1px solid lightpink';
        gridContainer.appendChild(div);

        div.addEventListener('mouseenter', function() {
            const randomColor = getRandomColor();
            div.style.backgroundColor = randomColor; 
            div.style.opacity = "40%";
        });
    }
}

function resetGrid() {
    gridContainer.innerHTML = ''; 
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


createGrid(numGrid);
const tag = document.createElement('p');
tag.textContent ="Created by Ralph Vincent Rodriguez";
tag.style.color = "lightpink";
tag.style.fontSize = "20px";
body.appendChild(tag);
