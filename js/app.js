document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const errorMsg = document.getElementById('error-msg');
    const list = document.getElementById('todo-list');
    const allbtn = document.getElementById('filter-all');
    const activebtn = document.getElementById('filter-active');
    const donebtn = document.getElementById('filter-done');
    const counter = document.getElementById('counter');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text==''){
              errorMsg.classList.remove('hidden');
            return;
        }
        errorMsg.classList.add("hidden");
        const li=document.createElement('li');
        li.textContent=text;
        list.appendChild(li);
        input.value ='';
    });
});