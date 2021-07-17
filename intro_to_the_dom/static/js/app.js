// var li = document.getElementById('listOne');

// console.log(li.innerText)

//Event
//var titleElement = document.getElementById('title')
//titleElement.addEventListener('hover', () => alert('It works'))



var addBtn = document.getElementById('addBtn');
var delBtn = document.getElementById('delBtn');
var todoItemField = document.getElementById('todo-item');
var ul = document.getElementById('todo-list-container');

function changeActiveClass() {
    this.classList.toggle('active');
}

function strikeValue() {
    this.classList.add("text-white");
    this.style.textDecoration = 'line-through'
    this.classList.add("bg-success");
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // create element
    var li = document.createElement('li');

    //set the innerHTML to whats inside the input field
    li.innerHTML = todoItemField.value;

    // add the classes
    li.classList.add('list-group-item')

    // add it into the ul
    ul.appendChild(li);

    // add the toggle event listener
    li.addEventListener('mouseover',  changeActiveClass);
    li.addEventListener('mouseleave', changeActiveClass);
    li.addEventListener('click', strikeValue);

    // OR
    //ul.innerHTML += `<li onmouseover= "changeActiveClass(this)" onmouseleave= "changeActiveClass(this)" class="list-group-item">${todoItemField.value}</li>`
    
    todoItemField.value = '';
})

delBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // remove it from the ul
    ul.removeChild(ul.lastChild);

    todoItemField.value = '';
})