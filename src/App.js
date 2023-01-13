import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  
  const [isChecked, setIsChecked] = useState(false)
  console.log(isChecked)

  return (
    <div className="App">
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{backgroundColor: buttonColor}}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" id='disable-button-checkbox' defaultChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
    </div>
  );
}



export default App;
