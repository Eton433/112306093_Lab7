document.getElementById('gradeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const mathGrade = parseFloat(document.getElementById('mathGrade').value);
    const englishGrade = parseFloat(document.getElementById('englishGrade').value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid grades.');
        return;
    }

    // Add row to table
    const tableBody = document.querySelector('#gradeTable tbody');
    const newRow = document.createElement('tr');
    const avgGrade = ((mathGrade + englishGrade) / 2).toFixed(2);
    const rowNumber = tableBody.rows.length + 1; // Dynamically calculate row number

    newRow.innerHTML = `
        <td>${rowNumber}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${avgGrade}</td>
    `;
    tableBody.appendChild(newRow);

    // Update averages
    updateAverages();
    document.getElementById('gradeForm').reset();
});

function updateAverages() {
    const rows = document.querySelectorAll('#gradeTable tbody tr');
    let mathTotal = 0, englishTotal = 0, overallTotal = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        mathTotal += parseFloat(cells[1].innerText); // Math grade is in the 2nd column
        englishTotal += parseFloat(cells[2].innerText); // English grade is in the 3rd column
        overallTotal += parseFloat(cells[3].innerText); // Average is in the 4th column
    });

    const rowCount = rows.length;
    const mathAverage = (mathTotal / rowCount).toFixed(2);
    const englishAverage = (englishTotal / rowCount).toFixed(2);
    const overallAverage = (overallTotal / rowCount).toFixed(2);

    document.getElementById('mathAverage').innerText = mathAverage;
    document.getElementById('englishAverage').innerText = englishAverage;
    document.getElementById('overallAverage').innerText = overallAverage;
}
