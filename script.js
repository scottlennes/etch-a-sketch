function createGrid(size) {
    const grid = document.getElementById('grid');

    for (let i = 0; i < size; i++) {
    
        let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
    
        for(let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener(type = 'mouseover', function() {
                    cell.classList.add('active');
                })
            row.appendChild(cell);
        }
    }
}

function resetGrid() {
    const grid = document.getElementById('grid');
    
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

createGrid(sizeInput.value);

// Create reset functionality
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener(type = 'click', function() {
    resetGrid();
    createGrid(sizeInput.value);
})