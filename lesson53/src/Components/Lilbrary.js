import Books from "./Books";
import '../css/Library.css';

const Library=({books})=>{
    return (
        <div class='library'>
            {books.map((book, index)=><Books
            key={index}
            title={book.title}
            author={book.author}
            iNumber={book.iNumber}
            genre={book.genre}
            yearIssue={book.yearIssue}
            cover={book.cover}
            />)}
        </div>
    )
}

export default Library
