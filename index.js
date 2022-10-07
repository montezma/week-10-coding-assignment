let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('confirm');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('game-name').value;
    row.insertCell(1).innerHTML = document.getElementById('received-date').value;
    row.insertCell(2).innerHTML = document.getElementById('num-copies').value;
    let ids = id++
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(ids));
    let instock = row.insertCell(4);
    instock.appendChild(instockAdd(ids, document.getElementById('game-name').value, document.getElementById('received-date').value, document.getElementById('num-copies').value));
    document.getElementById('game-name').value = '';
    document.getElementById('received-date').value = '';
    document.getElementById('num-copies').value = '';
})


function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete'
    btn.onclick = () => {
        console.log(`Deleting row with ID : test-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete)
    }
    return btn
}
function instockAdd(id, n, d, num) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-success';
    btn.id = id;
    btn.innerHTML = 'Confirm'
    btn.onclick = () => {
        instockTableCreate(n, d, num)
        console.log(`Moving row with ID : test-${id} to instock table.`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn
}

function instockTableCreate(name, date, num) {
    let table = document.getElementById('instock');
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = date;
    row.insertCell(2).innerHTML = num;
}