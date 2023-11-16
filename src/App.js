import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='display' className='display'>0</h1>
        <button onClick={() => changeNumber(-1)}>Decrease</button>
        <button onClick={() => changeNumber(+1)}>Increase</button>
      </header>
    </div>
  );
}
let number = 0;

function changeNumber(amount) {
  number += amount;
  document.getElementById('display').innerText = number;
}

export default App;