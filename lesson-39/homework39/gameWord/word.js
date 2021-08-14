const words=[
    {word: 'хлеб', description: 'еда'},
    {word: 'соль', description: 'приправа к еде'},
    {word: 'слон', description: 'большое животное'},
    {word: 'жираф', description: 'большое животное'},
    {word: 'хомяк', description: 'маленькое животное'},
    {word: 'стол', description: 'мебель'},
    {word: 'конфета', description: 'сладкая еда'},
    {word: 'стул', description: 'мебель'},
    {word: 'шуба', description: 'одежда'}
]

const randomWord=(words)=>{return Math.floor(Math.random()*words.length)}

const   box=document.querySelector('.box'),
        info=document.querySelector('#infoText'),
        btn=document.querySelector('#button');

const   letter=document.createElement('input'),
        checkBtn=document.createElement('a');

letter.focus();
const arrayWords=words[randomWord(words)];
let word=arrayWords.word,
    arrayAnswer=[],
    remainingLetter;

function getArrayAnswer(){
    
    for(let i=0; i<word.length; i++){
        arrayAnswer[i]='-';
    }
    return arrayAnswer;
}

function checkLetter(word, letter){
    let isGuessed=false;
    for(let i=0; i < word.length; i++){
        if(word[i]===letter && arrayAnswer[i]==='-'){
            arrayAnswer[i]=letter;
            remainingLetter--;
            isGuessed=true;
        }
    }
    return isGuessed;
}

function start(){
    let targetWord=arrayWords.word;
    if(!targetWord) changeMessage('Enter a word, please!!!');
    else{remainingLetter=word.length;
    arrayAnswer=getArrayAnswer();
    info.innerHTML=`Word is ${arrayAnswer.length} letters <br> ${arrayWords.description}
    <p style='color:red; font-size:30px; font-weight: 600;'>${arrayAnswer.join('')}</p> <br> Enter letter`;
    btn.remove();
    letter.setAttribute('id','letter');
    box.append(letter);
    checkBtn.href='#';
    checkBtn.innerText='check';
    checkBtn.id='checkBtn';
    box.append(checkBtn);
    letter.focus();
    }
}

function play(){
    let input=letter.value;
    if(checkLetter(word, input)){
        info.innerHTML=`Super! <p style='color:red; font-size:30px; font-weight: 600;'>${arrayAnswer.join('')}</p> <br>
        one more letter?`;
        if(remainingLetter==0){
            info.innerHTML=`Super! <p style='color:red; font-size:30px; font-weight: 600;'>${arrayAnswer.join('')}</p> <br> The end!`;
            letter.remove();
            checkBtn.remove();
        }
        letter.value='';
        letter.focus();
    }else{
        info.innerHTML=`No such letter <br> <p style='color:red; font-size:30px; font-weight: 600;'>${arrayAnswer.join('')}</p><br>
        one more letter?`;
        letter.value='';
        letter.focus();
    }
}

function changeMessage(message){
    document.querySelector('#infoText').innerHTML=message;
}

btn.addEventListener('click', start);
checkBtn.addEventListener('click', play);


