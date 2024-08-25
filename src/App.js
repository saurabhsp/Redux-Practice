import { useDispatch } from 'react-redux';
import './App.css';
import Counter from './Components/Counter';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button className='btn btn-success mt-3' onClick={(e)=>{dispatch({type: "INCREMENT"})}}>Increase</button>

      <Counter/>

      <button className='btn btn-danger' onClick={(e)=>{dispatch({type: "DECREMENT"})}}>Decrease</button>
    </div>
  );
}

export default App;
