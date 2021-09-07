import './App.css';
import Button from './Button';
import Title from './Title';
import Text from './Text';
import Picture from './Picture';

function App() {
  return (
    <div className='content'>
      <Title />
      <hr/>
    <Text/>
    <Picture/>
    <br/>
      <Button />
    </div>
  );
}

export default App;
