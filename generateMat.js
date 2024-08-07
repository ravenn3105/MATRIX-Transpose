function generateMatrix() {
    let numRows, numCols;
    const isSquareMatrix = window.location.href.includes('square.html');
    
    if (isSquareMatrix) {
        numRows = numCols = parseInt(document.getElementById('matrixSize').value);
    } else {
        numRows = parseInt(document.getElementById('numRows').value);
        numCols = parseInt(document.getElementById('numCols').value);
    }

    const matrixContainer = document.getElementById('matrixContainer');
    matrixContainer.innerHTML = '';

    let tableHTML = '<table id="matrix">';
    for (let i = 0; i < numRows; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < numCols; j++) {
            tableHTML += `<td><input type="number" id="cell-${i}-${j}" placeholder="0" step="any" class="no-spinner"></td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    matrixContainer.innerHTML = tableHTML;

    // Add event listeners to all matrix cells
    const cells = document.querySelectorAll('#matrix input');
    cells.forEach(cell => {
        cell.addEventListener('input', updateButtonText);
    });

    // Initial button text update
    updateButtonText();
}

function validateAndPrepareMatrix() {
    const numRows = parseInt(document.getElementById('numRows').value);
    const numCols = parseInt(document.getElementById('numCols').value);

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            if (cell.value === '' || isNaN(cell.value)) {
                cell.value = '0';
            }
        }
    }
    
    updateButtonText();
}

function isMatrixFilled() {
    const cells = document.querySelectorAll('#matrix input');
    return Array.from(cells).every(cell => cell.value !== '');
}

function updateButtonText() {
    const button = document.getElementById('gen-m');
    if (button) {
        button.textContent = isMatrixFilled() ? 'Reset' : 'Generate';
    }
}