document.addEventListener('DOMContentLoaded', () => {
    let body = document.getElementById('calendar');

    for(let x = 0; x < 7; x++) {
        createRow(body);
    }
});

function createRow(parent) {
    let row = document.createElement('div');
    row.classList.add('row');

    for(let x = 0; x < 7; x++) {
        createCol(row);
    }

    parent.appendChild(row);
}

function createCol(parent) {
    let col = document.createElement('div');
    col.classList.add('col');
    col.classList.add('bg-dark');
    col.classList.add('rounded');
    col.classList.add('date');
    col.textContent = 'NaN';

    parent.appendChild(col);
}
