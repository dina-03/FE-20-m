const users=[
    {
        name: 'John',
        lastName: 'Doe',
        city: 'London'
    },
    {
        name: 'Denzel',
        lastName: 'Washington',
        city: 'New York'
    },
    {
        name: 'Meryl',
        lastName: 'Streep',
        city: 'New Jersy'
    },
    {
        name: 'Tom',
        lastName: 'Hanks',
        city: 'California'
    },
    {
        name: 'Kate',
        lastName: 'Winslet',
        city: 'Reading'
    }
];

const wrap=document.querySelector('.wrapper');

renderUsers(users)

function createUsersList(index, user){
    const div=document.createElement('div');
    div.getAttribute('data-index', index)
    div.innerHTML=`<h3>${user.name} ${user.lastName} / <span>${user.city}</span></h3>`;
    div.onclick=onclickHandler;
    return div
}

function renderUsers(arr){
    const index=localStorage.getItem('index')
    const div=document.createElement('div')
    for(let user of users){
        const box=createUsersList(index, user);
        box.classList.add('users-list')
        if(index===arr.index){
            box.click();
        }
        div.append(box)
    }
    wrap.append(div)
}

function onclickHandler(event){
    const list=document.querySelectorAll('.users-list');
    if(event.target.tagName==='DIV'){
    list.forEach(el=>el.style.backgroundColor='azure');
    event.currentTarget.style.backgroundColor='aliceblue';
    const index=event.target.dataset.index;
    localStorage.setItem('userId', index);
    console.log(event.target)}
}
