const right=document.querySelector('.right'),
        form=document.querySelector('#contact-form');
let currentContact;

renderList();

right.onclick=removeContact;


form.onsubmit=onAddContactHandler;

function renderList(){       
    right.innerHTML=Store.getAll().map(mapToRow).join('');    
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
        Store.remove(index)
        renderList();
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
    Store.save(contact);
    renderList();
    form.reset();
}