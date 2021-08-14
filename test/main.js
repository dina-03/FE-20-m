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

