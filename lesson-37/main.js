//Task 2
//динамически добавить пять одинаковых элементов на страницу, добавить им в css размер (они должны быть квадратными) и цвет (любой). По клику на элементы они должны менять свою форму - если элемент квадратный, он должен стать круглым и наоборот

const wrap = document.querySelector('.wrapper'),
        box=document.querySelector('.box');

let count=1;

const divRender=()=>{
    let divBox=createDiv();
    count++;
    wrap.append(divBox);
    if(count===6) box.removeEventListener('click', divRender);
}

box.addEventListener('click', divRender);
box.addEventListener('click', changeForme);


function createDiv(){
    const divBox=document.createElement('div');
    divBox.className='box';
    divBox.onclick=()=>{
        divBox.classList.toggle('borderRadius');
    };
    return divBox;
}

function changeForme(){
    return box.classList.toggle('borderRadius');
}




