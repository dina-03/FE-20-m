const  input=document.querySelector('#inputText'),
        btnAdd=document.querySelector('#btn'),
        ul=document.createElement('ul');

let todoList=[];

document.querySelector('.container').append(ul);

input.focus();

function renderUl(s, array){
    const el=document.querySelector(s);
    if(el){
        el.innerHTML='';
        array.forEach(function(item){
            el.append(item);
        });
    }
}

function createList(todo, index){
    const li=document.createElement('li'),
            checkbox=document.createElement('input'),
            title=document.createElement('span');
    li.style=`list-style: none;`;
    checkbox.type='checkbox';
    checkbox.className='check';
    checkbox.checked=todo.done;
    title.className='output';
    title.innerHTML=`${todo.title}`;
    checkbox.onchange=function(){
        todoList[index].done=checkbox.checked;
        title.style.textDecoration=checkbox.checked ? 'line-through':'none';
    }
    li.innerHTML=`${index+1}. `;
    li.append(checkbox);
    li.append(title);
    return li;
}

function cleanInput(el){
    el.value='';
    el.focus();
}

btnAdd.onclick=()=>{
    const text=input.value;
    if(!text){
        alert('enter todo, pleas!');
        cleanInput(input);
    }else{
        todoList.push({title: text, done: false});
        renderUl('.container', todoList.map(createList));
        cleanInput(input);
    }
}