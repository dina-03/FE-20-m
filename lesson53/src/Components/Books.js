import '../css/Books.css';
import Button from './Button';
import Counter from './Counter';

export default function Books({title, author, yearIssue, genre, iNumber, cover}){
    return (
        <div class='book'>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{yearIssue} <br/> <span>{genre}</span></p>
            <h5>{iNumber}</h5>
            <img src={cover}/> <br/>
            <Button clickHandler={clickHandler}/>
            <Counter />
        </div>
    )
}

function clickHandler(){
    document.querySelector('.book h2').innerHTML='The book is out of stock'
}