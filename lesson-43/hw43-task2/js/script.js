const users=[
    {userName:'Vasiliy Petrov', age:32, city:'London', profession:'driver'},
    {userName:'Genadiy Sidorov', age:45, city:'New-York', profession:'broker'},
    {userName:'Svetlana Ivanova', age:37, city:'Berlin', profession:'teacher'},
    {userName:'Michael Volgan', age:55, city:'Stuttgart', profession:'manager'},
    {userName:'Katya Schulz', age:24, city:'Berlin', profession:'student'},
    {userName:'Maria Weber', age:29, city:'Moscow', profession:'seller'},
    {userName:'Lidia Krasnova', age:32, city:'Moscow', profession:'coiffure'}
];

const row=document.querySelector('.row'),
        search=document.querySelector('#search'),
        addBtn=document.querySelector('#addBtn');

users.forEach(el=>{
    const userDetails=document.createElement('div');
    userDetails.className='user-details';
    userDetails.innerHTML=`<p><b>${el.userName}</b>&nbsp; |&nbsp;
    Age:<b> ${el.age}</b>&nbsp; |&nbsp; City: <b>${el.city}</b>&nbsp; |&nbsp;  ${el.profession}</p>`;
    row.append(userDetails);
});

function findUser(){
    for(let i=0; i<users.length; i++){
        if(search.value.toLowerCase()===users[i].city.toLowerCase()){
        const findUsersCity=document.createElement('div');
        findUsersCity.innerHTML=`<div class='user-details'><b>${users[i].userName}</b>, &nbsp; |&nbsp; age: ${users[i].age},&nbsp; |&nbsp; city: ${users[i].city},&nbsp; |&nbsp; profession: ${users[i].profession}</div>`;
        row.append(findUsersCity)
        }
    }
}

addBtn.onclick=()=>{
    row.innerHTML='';
    findUser(); 
}