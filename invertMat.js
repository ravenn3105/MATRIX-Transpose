function invertMatrix() {
    alert('Invert Matri');
    const isSquareMatrix = window.location.href.includes('square.html');
    let numRows, numCols;
    
    if (isSquareMatrix) {
        numRows = numCols = parseInt(document.getElementById('matrixSize').value);
    } else {
        numRows = parseInt(document.getElementById('numRows').value);
        numCols = parseInt(document.getElementById('numCols').value);
    }

    if (numRows !== numCols) {
        document.getElementById('inverseResult').innerHTML = "The matrix must be square to have an inverse.";
        return;
    }

    const matrix = [];

    // Create the matrix from inputs
    for (let i = 0; i < numRows; i++) {
        matrix[i] = [];
        for (let j = 0; j < numCols; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            matrix[i][j] = Number(cell.value);
        }
    }

    // Calculate the determinant
    const det = determinant(matrix);

    if (det === 0) {
        document.getElementById('inverseResult').innerHTML = "The matrix is not invertible (determinant is zero).";
        return;
    }

    // Calculate the adjugate matrix
    const adj = adjugate(matrix);

    // Calculate the inverse
    const inv = [];
    for (let i = 0; i < numRows; i++) {
        inv[i] = [];
        for (let j = 0; j < numCols; j++) {
            inv[i][j] = adj[i][j] / det;
        }
    }

    let resultHTML = '<table>';
    for (let i = 0; i < numRows; i++) {
        resultHTML += '<tr>';
        for (let j = 0; j < numCols; j++) {
            resultHTML += `<td>${inv[i][j].toFixed(4)}</td>`;
        }
        resultHTML += '</tr>';
    }
    resultHTML += '</table>';

    document.getElementById('inverseResult').innerHTML = resultHTML;
}