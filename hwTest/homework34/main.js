//Task01
/* 
сделать шесть кнопок и абзац с текстом. Три кнопки меняют размер шрифта в абзаце (15px, 25px, 35px). 
Оставшиеся три меняют цвет текста - на синий, красный зеленый. Изменение размера шрифта не изменяет цвет 
и наооборот - изменение цвета не влияет на размер
 */

const   btn15=document.getElementById('15'),
        btn25=document.getElementById('25'),
        btn35=document.getElementById('35'),
        red=document.querySelector('#red'),
        green=document.querySelector('#green'),
        blue=document.querySelector('#blue'),
        text=document.querySelector('.text');

function changeSize(element, size){
    element.style.fontSize=`${size}px`
}

function changeColor(element, color){
    element.style.color=`${color}`;
}

btn15.onclick=function(){
    changeSize(text,15)
}   
btn25.onclick=function(){
    changeSize(text,25)
}
btn35.onclick=function(){
    changeSize(text,35)
} 

red.onclick=function(){
    changeColor(text,'red')
}
green.onclick=function(){
    changeColor(text,'green')
}
blue.onclick=function(){
    changeColor(text,'blue');
}
//Task02
/* 
Сделать два input, для каждого инпута своя кнопка. Под инпутами текст. В одном инпуте можно задавть размер шрифта, 
при нажатии на кнопку шрифта текста становится того размера, который ввели. Второй инпут для цвета, соответсвенно 
при нажатии на кнопку цвет текста становится таким, который задали в инпуте.
 */

const   sizeInput=document.querySelector('#sizeInput'),
        sizeTextBtn=document.querySelector('#sizeTextBtn'),
        colorInput=document.querySelector('#colorInput'),
        colorBtn=document.querySelector('#colorBtn'),
        bottomText=document.querySelector('.bottomText');

        //console.log(bottomText);

function changeText(){
    bottomText.style=`font-size: ${sizeInput.value}px; color: ${colorInput.value}`;
    sizeInput.value='';
    colorInput.value='';
}

sizeTextBtn.onclick=changeText;
colorBtn.onclick=changeText;

//Task03*
/* 
На странице сделать квадрат, изначально черного цвета, при нажатии на квадрат, его цвет менется на другой рандомный цвет, 
а в самом квадрате появляется порядковый номер сделанного клика

 */

const square=document.getElementById('square');
//let count=0;

function randomNum(){
    return parseInt(Math.random()*256);
}
        
function getRandomColor(){
    let r=randomNum(),
        g=randomNum(),
        b=randomNum(),
        color='#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}

/* square.onclick=()=>{
    square.style.background=getRandomColor();
    count++;
    square.querySelector('.output').textContent=count;
} */

function clickHandler(){
    let counter=0;
    return ()=>{square.style.background=getRandomColor();
        counter++;
        square.querySelector('.output').textContent=counter;}
}
/* const myClickHandler=clickHandler(); */

square.onclick=clickHandler();
