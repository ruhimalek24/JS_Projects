const input = document.getElementById('input');
const add = document.getElementById('add');
const task = document.getElementById('list');
const container = document.getElementById('clear-btn');

const clearAll = document.createElement('button');
clearAll.innerText = 'Clear All';
clearAll.style.display = 'none';
clearAll.classList.add('clear');

container.appendChild(clearAll);

add.addEventListener('click', () => {
    const value = input.value;
    // localStorage.setItem("tasks", value);
    const div2 = document.getElementById('clear-btn');
    const div = document.createElement('div');
    task.appendChild(div);
    div.classList.add('dynamic-div');

    const p = document.createElement('p');
    div.appendChild(p);
    div.classList.add('dynamic-list');
    p.innerText = value;

    const del = document.createElement('p');
    del.innerText = ' - ';
    del.addEventListener('click', () => {
        div.remove();
    })
    div.appendChild(del);
    div.classList.add('dynamic-btn');

    clearAll.style.display = 'block';

    input.value = '';

})

container.addEventListener('click', () => {
    task.innerHTML = '';
    clearAll.style.display = 'none';
})

