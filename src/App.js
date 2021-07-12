import React, {useState} from 'react';
import './App.css';
import CaseDisplay from './components/CaseDisplay';
import StartPage from './components/StartPage'
import firstImg from './Assets/pictures/firstImg.png'
import secondImg from './Assets/pictures/secondImg.png'
import thirdImg from './Assets/pictures/thirdImg.png'
//import global from './components/globalNum';

function App() {
  const [count, setCount] = useState(0);
  global.lastPage = false

  return (
      <div className="App">
        {count === 0 && <div><img className="screenImg" src={firstImg} onClick={() => setCount(count + 1)}></img></div>}
        {count === 1 && <div><img className="screenImg" src={secondImg} onClick={() => setCount(count + 1)}></img></div>}
        {count === 2 && <div><img className="screenImg" src={thirdImg} onClick={() => setCount(count + 1)}></img></div>}
        {count === 3 && <CaseDisplay></CaseDisplay>}
        {global.lastPage === true && <div><h3>Hei</h3></div>}
      </div>
  );
}

export default App;
