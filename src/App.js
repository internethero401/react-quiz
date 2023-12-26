import './App.css';
import Start from './components/Start';
import Correct from './components/Correct';

function App() {
  return (
    <div id="while" style={{height: "100%", width: "100%", backgroundColor: "silver"}}>
      <Start />
      <p></p>
      <Correct />
    </div>
  );
}

export default App;
