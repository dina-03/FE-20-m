const right=document.querySelector('.right'),
        form=document.querySelector('#contact-form'),
        listLoader=document.querySelector('#list-loader');
let currentContact=[];

showListLoader(false)
loadList();

right.onclick=removeContact;

form.onsubmit=onAddContactHandler;

function loadList(){
    //right.style.display='none';
    showRightLoader(false)
    showListLoader(true);
    Store.getAll().then(contacts=>{
        showListLoader(false);
        currentContact=contacts;
        showRightLoader(true)
        renderList()
    })
}

function showListLoader(isShow){
    listLoader.style.display=isShow?'block':'none';
}

function showRightLoader(isShow){
    right.style.display=isShow?'block':'none';
}

function renderList(){       
    right.innerHTML=currentContact.map(mapToRow).join('');    
}

function mapToRow(contact, index){
    return `
    <div class='item'>
    <div class='item-left'>
    <h2>${contact.name} ${contact.lastName}</h2>
    <h3>${contact.phone}</h3>
    <p>${contact.email}</p></div><div class='item-right'>
    <button id='delete' data-index=${index}>Remove</button>
    </div>
    </div>
    `
}

function removeContact(e){
    if(e.target.tagName==='BUTTON'){
        const index=parseInt(e.target.dataset.index);
        Store.remove(index).then(()=>{
            currentContact.splice(index, 1)
            renderList();
        }) 
    }
}

function onAddContactHandler(e){
    e.preventDefault();
    const form=e.target;
    const contact=new Contact(
    form.name.value,
    form.lastName.value,
    form.phone.value,
    form.email.value
    );
    showListLoader(true);
    showRightLoader(false);

    Store.save(contact).then(res=>{
        currentContact=res;
        showListLoader(false);
        renderList();
        showRightLoader(true)
        form.reset();
    });
}