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
            tableHTML += `<td><input type="number" id="cell-${i}-${j}" value="0"></td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    matrixContainer.innerHTML = tableHTML;
}