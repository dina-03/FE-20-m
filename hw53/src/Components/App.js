import '../css/App.css';
import Library from './Lilbrary';

function getBooks(){
  return [
    {
      title: 'Harry Potter',
      author: 'Joan Rowling',
      yearIssue: 1995,
      genre: 'Adventure',
      iNumber: 234561,
      cover: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2F9781408855652-png.jpg'
    },
    {
      title: 'Lord of the Rings',
        author: 'John Tolkien',
        yearIssue: 1978,
        genre: 'Saga',
        iNumber: 7849632,
        cover: 'https://m.media-amazon.com/images/I/51waks01PAL.jpg'
    },
    {
      title: 'Emma',
        author: 'Jane Austin',
        yearIssue: 1816,
        genre: 'Drama',
        iNumber: 7849459,
        cover: 'https://images.penguinrandomhouse.com/cover/9780307386847'
    }
  ]
}

function App() {
  return (
    <div className="App">
      <Library books={getBooks()}/>
    </div>
  );
}

export default App;
