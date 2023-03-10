//components
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import Events from './components/Events';

//src
import './App.css';

function App() {
  return (
    <div className="App">      
        <h1>Fundamentos React</h1>
        <FirstComponent/>
        <TemplateExpression/>
        <Events></Events>
    </div>
  );
}

export default App;
