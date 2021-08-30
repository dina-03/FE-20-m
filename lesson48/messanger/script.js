/* project Messenger
#object User:{id:3, name:'Vasya', city: 'Berlin'}
array from three users: [user1, user2, user3]
array message: [{
    id:0,
    userId:3,
    title:'Some title',
    text: 'Some text',
    data:'01.10.21',
    comments:[{},{},{},{}]
}]
}, {},{}]

comment:{
    id:0,
    userId:3,
    postId:0,
    text: 'some text',
    data:'05.10.21'
}
*/
/* В проект Messenger добавить возможность пользователю писать новые сообщения, а так же добавлять комментарии к опубликованным сообщениям (как вариант реализации сначала спрашивать имя пользователя, чтобы при создании комментария вы могли сохранять его, передавая userId. А еще нужно продумать как вы будете определять к какому сообщению вы должны будете добавить этот комментарий) */
class User{
    constructor(name, city){
        this.name=name;
        this.city=city;
        this.id=User.id++;
    }
    static id=0;

    renderUser(){
        return `
        <div class='list-left'>
        <h2 data-id=${this.id}>${this.name} / <span>${this.city}</span></h2> </div> 
        `
    }
}



const users=[new User('Vasya Pupkin', 'Berlin'), new User('Petya Sidorov', 'London'), new User('Sofia Werner', 'Köln'), new User('Alisa Presnjak', 'Berlin'), new User('Gena Balkin', 'Hamburg')]

const usersList=document.querySelector('.users-list'),
        renderUsersList=(array)=>{
            array.forEach(item=>{
                usersList.innerHTML+=item.renderUser()
            })
        }

renderUsersList(users);

class Message{
    constructor(userId, title, text, data){
        this.userId=userId;
        this.title=title;
        this.text=text;
        this.data=data;
        this.comments=[];
        this.id=Message.id++;
    }
    static id=0;

    renderMessage(){
        return `
        <div data-message=${this.id}><h3>${this.title};  Data: ${this.data}</h3>
        </div><hr>
        `
    }

    renderUserMessage(){
        return `
        <div data-message=${this.id}>
        <form action="#" id="user-message">
        <input type="text" id="message-title" placeholder="Title">
        <textarea name="users-messageText" id="" cols="40" rows="2" placeholder="Message"></textarea><button id="addBtn">Add</button>
        </form></div>
        `
    }

    renderFullInfo(){
        return `
        <div>
        <h3>${this.title}</h3>
        <p class='messageText'> ${this.text}</p>
        <h4>Published: ${this.data}</h4><hr><br>
        ${(this.comments.length===0)?'<p>No comment</p>':this.comments.map(item=>item.renderComment()).join('')}
        </div>
        `
    }
}

class Comment{
    constructor(userId, postId, text, data){
        this.userId=userId;
        this.postId=postId;
        this.text=text;
        this.data=data;
        this.id=Comment.id++;
    }
    static id=0;

    renderComment(){
        return `
        <div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~   
        <h5>${this.text}</h5>
        <p>${this.data}, comment by ${findUserById(this.userId).name}</p>
        </div>
        `
    }
}

const messages = [
    new Message(0, 'Hello', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, sed?', new Date().toLocaleDateString()),
    new Message(0, 'Title02', 'Lorem ipsum dolor sit amet consectetur. Odit, sed?', new Date().toLocaleDateString()),
    new Message(0, 'Title03', 'Lorem ipsum dolor adipisicing elit. Odit, sed?', new Date().toLocaleDateString()),
    new Message(0, 'Title04', 'Lorem ipsum dolor sit amet consectetur', new Date().toLocaleDateString()),
    new Message(0, 'About', 'Lorem ipsum dolor adipisicing elit. Odit, sed?', new Date().toLocaleDateString()),
    new Message(0, 'Actor', 'Lorem ipsum dolor. Odit, sed?', new Date().toLocaleDateString()),
    new Message(1, 'Text', 'Info', new Date().toLocaleDateString()),
    new Message(1, 'Doctor', 'Lorem ipsum dolor sit amet', new Date().toLocaleDateString()),
    new Message(1, 'Vector', 'Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку', new Date().toLocaleDateString()),
    new Message(2, 'Постулат жизни', 'Жизнь прекрасна, как ни крути! Главное найти свою точку опоры!', new Date().toLocaleDateString()),
    new Message(2, 'Uraaa!', 'Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum ', new Date().toLocaleDateString()),
    new Message(2, 'Visitor', 'Однажды одна маленькая строчка рыбного текста по имени', new Date().toLocaleDateString()),
    new Message(2, 'Graf', 'по дороге встретил текст рукопись. ', new Date().toLocaleDateString()),
    new Message(3, 'Prosto Text', 'Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. ', new Date().toLocaleDateString()),
    new Message(3, 'A Hto ego znaet?', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.', new Date().toLocaleDateString()),
    new Message(2, 'И такое бывает', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.', new Date().toLocaleDateString()),
    new Message(3, 'Я делаю все сама!!', 'Вдали от всех живут они в буквенных домах на берегу Семантика', new Date().toLocaleDateString()),
    new Message(3, 'Шутка', ' Даже всемогущая пунктуация не имеет власти над рыбными текстами', new Date().toLocaleDateString()),
]

messages[0].comments.push(new Comment(0,0, 'very good', new Date().toLocaleDateString()));
messages[0].comments.push(new Comment(2,1, 'nice to see you', new Date().toLocaleDateString()));
messages[10].comments.push(new Comment(3,0, 'good', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(1,1, 'bad', new Date().toLocaleDateString()));
messages[3].comments.push(new Comment(2,1, 'das war schön!', new Date().toLocaleDateString()));
messages[3].comments.push(new Comment(2,3, 'круто', new Date().toLocaleDateString()));
messages[9].comments.push(new Comment(3,1, 'не могу не согласиться', new Date().toLocaleDateString()));
messages[9].comments.push(new Comment(4,1, 'не могу не согласиться', new Date().toLocaleDateString()));
messages[9].comments.push(new Comment(2,1, 'не могу не согласиться', new Date().toLocaleDateString()));
messages[9].comments.push(new Comment(1,1, 'не могу не согласиться', new Date().toLocaleDateString()));
messages[9].comments.push(new Comment(3,1, 'не могу не согласиться', new Date().toLocaleDateString()));
messages[15].comments.push(new Comment(1,0, 'проще нужно относиться ко всему', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(0,0, 'это просто чума!!!', new Date().toLocaleDateString()));
messages[7].comments.push(new Comment(3,2, 'это просто чума!!!', new Date().toLocaleDateString()));

const leftBox=document.querySelector('.left'),
        rightBox=document.querySelector('.right');

usersList.onclick=(event)=>{
    rightBox.innerHTML='';
    if(event.target.tagName==='H2'){
        //const user=users.find(item=>+event.target.dataset.id===item.id), //+вернет строку
    const userMessages=messages.filter(message=>message.userId===+event.target.dataset.id)
    const addMessage=(userMessages.length)?userMessages.map(item=>item.renderMessage()).join(''):'<p>No message</p>';

    const formUser=createFormUserMessage();       
    leftBox.innerHTML=`${addMessage}`;
    leftBox.append(formUser)
    }
}

function createFormUserMessage(){
    const form=document.createElement('form');
    form.classList.add('user-message')
    form.innerHTML=`<input type="text" id="message-title" placeholder="Title">
    <textarea id="textArea" cols="38" rows="2" placeholder="Message"></textarea><button id="addBtn">Add</button>` 
    return form
}

function onclickBtnHandler(){
    console.log('Hi')
}


leftBox.onclick=(event)=>{
    //console.log(event.target.dataset.message)
     //const message = event.target.dataset.message
    //const userName=users.find(item=>+event.target.dataset.id===item.id);
    /* const user = users.find(item => message.userId === item.id) */
    const usersMess=messages.filter(item=>+event.target.parentNode.dataset.message===item.id);
    if(event.target.tagName==='H3'){
        rightBox.innerHTML=usersMess.map(item=>item.renderFullInfo()).join('');
        const commentForm=createCommentForm();
        rightBox.append(commentForm)
    }
}

function findUserById(id){
    return users.find(user=>user.id===id)
}

function createCommentForm(){
    const form=document.createElement('form');
    form.classList.add('user-message')
    form.innerHTML=`<input type="email" id="message-title" placeholder="your email">
    <textarea id="textArea" cols="38" rows="2" placeholder="Message"></textarea><button id="addBtn">Add</button>` 
    return form
}