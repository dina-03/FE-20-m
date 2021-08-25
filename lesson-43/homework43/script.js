const contacts=[
    {name: 'Adam Mustermann', phone: '0324698574', email: 'adam@dot.com', address: 'Hamburg', description: 'Arzt'},
    {name: 'Linda Mustermann', phone: '032487564', email: 'linda@dot.com', address: 'Hamburg', description: 'Ärztin'},
    {name: 'Random Master', phone: '0123456789', email: 'random@rand.com', address: 'Randburg', description: 'Hausmann'}
];
const root=document.querySelector('#root'),
        nav=document.querySelector('.nav');

let currentPage=document.querySelector('a[href="contacts"]'),
    currentContact;

renderContacts();

nav.onclick=(event)=>{
    event.preventDefault();
    if(event.target.tagName==='A'){
        if(event.target.getAttribute("href") !== currentPage.getAttribute("href")){
            currentPage.classList.remove("active");
            currentPage=event.target;
            currentPage.classList.add("active");
            navigation(currentPage.getAttribute("href"));
        }
    }
};

function navigation(path){
    switch (path){
        case "contacts":
            renderContacts();
            break;
        case "addContact":
            renderAddContact();
            break;
    }
}

function renderContacts(){
    root.classList.add('contacts');
    root.innerHTML=`<ul class="list">
        ${contacts.map(mapToContact).join('')}
        </ul>
        <div class="view">No select contact</div>`;
    root.querySelector('.list').onclick=clickContact;
}

function clickContact(el){
    let li=el.target;
    if(li.classList.contains('remove')){
        li.classList.remove('active-item');
        contacts.splice(li.dataset.index, 1);
        renderContacts();
    }else{
        if(li.tagName !=='li'){
            li=el.target.parentNode;
        }
        if(currentContact){
            currentContact.classList.remove('active-item')
        }
        showContact(li.dataset.index);
        currentContact=li;
        currentContact.classList.add('active-item');
    }
}

function showContact(index){
    const el=contacts[parseInt(index)],
            view=root.querySelector('.view');
    view.innerHTML=`<h4>${el.name}</h4>
    <div><img src='./img/phone.png'> ${el.phone}</div>
    <div><img src='./img/email.png'> ${el.email}</div>
    <div><img src='./img/buildings.png'> ${el.address}</div>
    <div>${el.description}</div>`
}

function mapToContact(contact, index){
    return `<li class='list-item' data-index=${index}>
            <h2>${contact.name}</h2><div class='remove'></div>
            <h4>${contact.description}</h4>
            </li>`
}

function renderAddContact(){
    root.classList.add('addContact');
    root.innerHTML=`<form action="#" id="addContactForm">
    <input type="text" id="name" placeholder="Type name">
    <input type="number" id="phone" placeholder="Type phone">
    <input type="email" id="email" placeholder="Type email">
    <input type="text" id="address" placeholder="Type address">
    <textarea type="text" id="description" placeholder="Type description"></textarea><br>
    <button id="addBtn">Add</button>
</form>`;
const form=document.forms.addContactForm;
form.onsubmit=formHandler;
}

function formHandler(event){
    event.preventDefault();
    const form=event.target;
    contacts.push({
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        address: form.address.value,
        description: form.description.value
    });
    clearForm(form);
}

function clearForm(form){
    for(let i=0; i<form.elements.length; i++){
        if(form.elements[i].localName !=='button'){
            form.elements[i].value='';
        }
    }
}