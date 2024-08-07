function multiplyMatrixVector(matrix, vector) {
    const result = [];
    for (let i = 0; i < matrix.length; i++) {
        result[i] = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            result[i] += matrix[i][j] * vector[j];
        }
    }
    return result;
}

function vectorNorm(vector) {
    return Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
}

function normalizeVector(vector) {
    const norm = vectorNorm(vector);
    return vector.map(val => val / norm);
}

function powerIteration(matrix, numIterations = 1000, tolerance = 1e-6) {
    let b = Array(matrix.length).fill(1);
    b = normalizeVector(b);
    let eigenvalue = 0;

    for (let i = 0; i < numIterations; i++) {
        const bNext = multiplyMatrixVector(matrix, b);
        const nextEigenvalue = vectorNorm(bNext);
        b = normalizeVector(bNext);

        if (Math.abs(nextEigenvalue - eigenvalue) < tolerance) {
            break;
        }
        eigenvalue = nextEigenvalue;
    }

    return { eigenvalue, eigenvector: b };
}

function calculateEigen() {
    const numRows = parseInt(document.getElementById('matrixSize').value);
    const matrix = [];

    for (let i = 0; i < numRows; i++) {
        matrix[i] = [];
        for (let j = 0; j < numRows; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            matrix[i][j] = parseFloat(cell.value) || 0;
        }
    }

    const { eigenvalue, eigenvector } = powerIteration(matrix);
    let resultHTML = `<p>Largest Eigenvalue: ${eigenvalue.toFixed(6)}</p>`;
    resultHTML += `<p>Eigenvector: [${eigenvector.map(v => v.toFixed(6)).join(', ')}]</p>`;
    document.getElementById('eigenResult').innerHTML = resultHTML;
}