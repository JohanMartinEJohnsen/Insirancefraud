import React, {useState} from 'react';
import './App.css';
import CaseDisplay from './components/CaseDisplay';
import StartPage from './components/StartPage'
import firstImg from './Assets/pictures/firstImg.png'
import secondImg from './Assets/pictures/secondImg.png'
import thirdImg from './Assets/pictures/thirdImg.png'
//import global from './components/globalNum';
import LastPage from './components/LastPage';
//import { Button } from 'react-native-elements';

function App() {
  const [count, setCount] = useState(0);
  global.lastPage = false

  return (
      <div className="App">
        {count === 0 && <div><img className="screenImg" src={firstImg} onClick={() => setCount(count + 1)}></img></div>}
        {count === 1 && <div><img className="screenImg" src={secondImg} onClick={() => setCount(count + 1)}></img></div>}
        {count === 2 && <div><img className="screenImg" src={thirdImg} onClick={() => setCount(count + 1)}></img></div>}
        {count === 3 && <div><CaseDisplay></CaseDisplay><button onClick={() => setCount(count + 1)}>Next task</button></div>}
        {count === 4 &&<div><LastPage/></div>}
      </div>
  );
}

export default App;
