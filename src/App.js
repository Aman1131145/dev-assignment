import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      {/* We are using home because it gives us more freedom to manage the code */}
      <Home/>
    </div>
  );
}

export default App;
