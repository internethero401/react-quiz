import { useState } from 'react';
import './App.css';
import Start from './components/Start';
import Correct from './components/Correct';
// import Miss from './components/Miss';

function App() {
  const[state1, setState1] = useState(true)

  const changeState1 = () => {
    setState1(false);
  }

  return (
    <div id="while" style={{height: "100vh", width: "100%", backgroundColor: "silver"}}>
      {state1?(
        <Correct propsChangeState1 = {changeState1}/>  // props名を変更
      ) : (
        <Start />
      )}
    </div>
  );
}

export default App;