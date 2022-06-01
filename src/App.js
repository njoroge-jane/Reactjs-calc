import './App.css';

function App() {
  const numericalDidgits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++){
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    return digits;
  }
  return (
    <div className="App text-center">
<div className="calc">
  <div className="display">
    <span></span>0
  </div>
  <div className="operators">
    <button>/</button>
    <button>*</button>
    <button>+</button>
    <button>-</button>
    <button>DEL</button>
  </div>
  <div className="digits">
    { numericalDidgits() }
    <button>0</button>
    <button>=</button>
    <button>.</button>
  </div>
</div>
    </div>
  );
}

export default App;
