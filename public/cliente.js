function sumarMatrices() {
    const matrix1 = parseMatrix(document.getElementById('matrix1').value);
    const matrix2 = parseMatrix(document.getElementById('matrix2').value);

    if (!isValidMatrix(matrix1) || !isValidMatrix(matrix2)) {
        alert('Ingrese matrices válidas.');
        return;
    }

    if (!areEqualSize(matrix1, matrix2)) {
        alert('Las matrices deben tener el mismo tamaño.');
        return;
    }

    const resultMatrix = sumMatrix(matrix1, matrix2);
    document.getElementById('resultado').innerText = `La suma de las matrices es:\n${resultMatrix.map(row => row.join(' ')).join('\n')}`;
}

function parseMatrix(input) {
    return input.trim().split('\n').map(row => row.trim().split(/\s+/).map(Number));
}

function isValidMatrix(matrix) {
    const rowLength = matrix[0].length;
    return matrix.every(row => row.length === rowLength);
}

function areEqualSize(matrix1, matrix2) {
    return matrix1.length === matrix2.length && matrix1[0].length === matrix2[0].length;
}

function sumMatrix(matrix1, matrix2) {
    return matrix1.map((row, i) => row.map((num, j) => num + matrix2[i][j]));
}
