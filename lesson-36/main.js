//------Task01-------
//создать инпут с кнопкой (плейсхолдер для инпута введите название фильма), после нажатия на кнопку название введенного фильма с номером по порядку появляется под инпутом.

const   addBtn=document.querySelector('#addBtn'),
        ul=document.querySelector('.list'),
        input=document.querySelector('#input'),
        films=[];

addBtn.onclick=function(){
    const li=document.createElement('li');
    li.innerHTML=input.value;
    ul.prepend(li);
    /* li.style.backgroundColor='yellow' */
    input.value='';
}