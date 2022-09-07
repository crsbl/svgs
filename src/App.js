import logo from './logo.svg';
import './App.css';
import  svgs from './svgs'

function App() {

console.log(svgs())

  return (
    <div className="App flexCenter">
      <div style={{width:'20rem', height:'20rem'}}>
{ svgs().Corazon }
      </div>
    </div>
  );
}

export default App;
