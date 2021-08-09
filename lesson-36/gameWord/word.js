const   box=document.querySelector('.box'),
        answer=document.querySelector('#inputText'),
        info=document.querySelector('#infoText'),
        btn=document.querySelector('#button');

const   letter=document.createElement('input'),
        checkBtn=document.createElement('a');

let arrayAnswer=[],
    remainingLetter,
    word;

function getArrayAnswer(){
    for(let i=0; i<answer.value.length; i++){
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
    word=answer.value;
    if(!word) changeMessage('Enter word, please');
    else{remainingLetter=word.length;
    arrayAnswer=getArrayAnswer();
    info.innerHTML=`Word is ${arrayAnswer.length} letters <br>
    <p>${arrayAnswer.join('')}</p> <br> Enter letter`;
    answer.remove();
    btn.remove();
    answer.type='text';
    letter.setAttribute('id','letter');
    box.append(letter);
    checkBtn.href='#';
    checkBtn.innerText='check';
    checkBtn.id='checkBtn';
    box.append(checkBtn);
    }
}

function play(){
    let input=letter.value;
    if(checkLetter(word, input)){
        info.innerHTML=`Super! <p>${arrayAnswer.join('')}</p> <br>
        one more letter?`;
        if(remainingLetter==0){
            info.innerHTML=`Super! <p>${arrayAnswer.join('')}</p> <br> The end`;
            letter.remove();
            checkBtn.remove();
        }
        letter.value='';
    }else{
        info.innerHTML=`No such letter <br> <p>${arrayAnswer.join('')}</p><br>
        one more letter?`;
        letter.value='';
    }
}

function changeMessage(message){
    document.querySelector('#infoText').innerHTML=message;
}

btn.addEventListener('click', start);
checkBtn.addEventListener('click', play);


