import './App.css';
import Button from './components/Button';
import Nav from './components/Nav';

function App() {
  return (
    <div id="top">
      <Nav />
      <div className="text-center">
        <h1>
          Hello
        </h1>
        <Button />
      </div>
      <div id="page1">
        page 1
      </div>
      <div id="page2">
        page 2
      </div>
    </div>
  );
}

export default App;
