const collectionJazz=[
    {
        title: 'Jazz Item',
        cover: './img/jazz.jpg'
    },
    {
        title: 'Jazz Best Instrumental',
        cover: './img/bestInstrumental.jpg'
    },
    {
        title: 'Greatest Jazz Albums',
        cover: './img/GreatestJazzAlbums.jpeg'
    },
    {
        title: 'Instrumental Jazz',
        cover: './img/Instrumental-Jazz.jpeg'
    },
    {
        title: 'James Johnson',
        cover: './img/JazzBandBall.jpeg'
    },
    {
        title: 'Beegie Adair & Friends',
        cover: './img/JazzSimpler.jpeg'
    },
    {
        title: 'Light Instrumental Jazz',
        cover: './img/lightJazz.jpeg'
    },
    {
        title: 'Relax Jazz',
        cover: './img/relaxJazz.jpeg'
    },
    {
        title: 'The Settlement Quartet',
        cover: './img/stereophonic.jpeg'
    }
],
    collectionRock=[
        {
            title: 'Rock Item',
            cover: './img/rock.jpg'
        },
        {
            title: 'Rock Covers',
            cover: './img/rock_covers.png'
        },
        {
            title: 'Rock Covers',
            cover: './img/RockCovers.jpeg'
        },
        {
            title: 'Rock Covers',
            cover: './img/rockCovers.jpg'
        },
        {
            title: 'Rock Covers',
            cover: './img/rockCoVers02.jpeg'
        }
    ],
    collectionBlues=[
            {
                title: 'Blues Item',
                cover: './img/blues.jpg'
            },
            {
                title: 'The Blues',
                cover: './img/blues01.jpeg'
            },
            {
                title: 'Lightning Hopkins',
                cover: './img/bluesLH.jpeg'
            },
            {
                title: 'Sonny Boy Williamson',
                cover: './img/BluesSonnyBoyWilliamson.jpeg'
            },
            {
                title: 'Martin Scorsese',
                cover: './img/BluesTheBluesCover.jpeg'
            },
            {
                title: 'The Blues',
                cover: './img/bluses.jpeg'
            },
            {
                title: 'Chuck Berry',
                cover: './img/ChuckBerry.jpg'
            }
        ];

const   btnJazz=document.querySelector('#jazz-btn'),
        btnRack=document.querySelector('#rock-btn'),
        btnBlues=document.querySelector('#blues-btn'),
        content=document.querySelector('.content'),
        boxJazz=content.querySelector('.box-jazz'),
        boxRock=content.querySelector('.box-rock'),
        boxBlues=content.querySelector('.box-blues');


function fillArray(array){
    array.forEach((el)=>{
        const div=document.createElement('div');
        div.className='box';
        div.innerHTML=`<h3>${el.title}</h3> <img src="${el.cover}" alt="${el.title}">`;
        content.append(div);
    });
}

btnJazz.onclick=()=>{
    content.innerHTML='';
    boxJazz.append(fillArray(collectionJazz));
};

btnRack.onclick=()=>{
    content.innerHTML='';
    boxRock.append(fillArray(collectionRock));
};

btnBlues.onclick=()=>{
    content.innerHTML='';
    boxBlues.append(fillArray(collectionBlues));
};
