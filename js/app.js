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
        const span = document.createElement('span');   
        span.classList.add('item-text');                
        span.textContent = text;   
        li.appendChild(span);    
         const button = document.createElement('button');   
        button.classList.add('delete-btn');                
        button.textContent = 'Delete';   
        li.appendChild(button);                       
        list.appendChild(li);
        input.value ='';
        updateCounter(); 
    });
     list.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
            updateCounter(); 
        } else if (e.target.classList.contains('item-text')) {
          e.target.parentElement.classList.toggle('completed');  
          updateCounter(); 
        }
    });
    activebtn.addEventListener('click', () => {
    for (const li of list.children) {
        if (li.classList.contains('completed')) {
          li.style.display = 'none'; 
        } else {
          li.style.display = ''; 

        }
    }});
    donebtn.addEventListener('click', () => {
    for (const li of list.children) {
        if (li.classList.contains('completed')) {
             li.style.display = ''; 
        } else {
             li.style.display = 'none'; 
        }
    }
});
allbtn.addEventListener('click', () => {
    for (const li of list.children) {
       li.style.display = ''; 
    }
});
    function updateCounter() {
        const total = list.children.length;
        const done = list.getElementsByClassName('completed').length;
        counter.textContent = `${total - done} items left`;
    }

});