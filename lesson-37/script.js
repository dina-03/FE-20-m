//Task 1
//динамически добавить на страницу десять одинаковых элементов с классом "box". задать в css стили для этого класса. по клику на элемент он должен удаляться из DOM.

const wrap = document.querySelector('.wrapper'),
        box=document.querySelector('.box');

let count=1;

const divRender=()=>{
    let divBox=createDiv();
    count++;
    wrap.append(divBox);
    if(count===10) box.removeEventListener('click', divRender);
}

box.addEventListener('click', divRender);

function createDiv(){
    const divBox=document.createElement('div');
    divBox.className='box';
    divBox.onclick=()=>{
        divBox.remove();
    };
    return divBox;
}
