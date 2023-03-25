import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">              
        <MyForm user={{name: "Kalleo", email: "kalleo_leal@hotmail.com", bio: "Sou programador", role:"admin"}}/>
    </div>
  );
}

export default App;
