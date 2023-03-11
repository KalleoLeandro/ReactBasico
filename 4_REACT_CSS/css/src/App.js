import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const n = 5;
  const redTitle = true;

  return (
    <div className="App">   
    {/*CSS Global*/}
      <h1>React com CSS</h1>  
      {/*CSS de Componente*/}
      <MyComponent/>
      {/*Inline CSS*/}
      <div style={{display: "flex", justifyContent: "center", border: "1px solid black", width: "40%", margin: "0 auto"}}>
        <p style={{color: "blue", margin: "10px auto", textAling: "center;"}}>Este elemento foi estilizado inline</p>
      </div>
      {/*CSS Inline Dinâmico*/}
      <div style={{display: "flex", justifyContent: "center", border: "1px solid black", width: "40%", margin: "0 auto"}}>
        <h2 style={n<10 ?({color: "purple"}):({color: "orange"})}>CSS Dinâmico</h2> 
      </div>
      {/*Classe Dinâmica*/}
      <div style={{display: "flex", justifyContent: "center", border: "1px solid black", width: "40%", margin: "0 auto"}}>
        <h2 className={redTitle ? "red-title" : "title"}>Este título terá class dinâmica</h2>
      </div>
      {/*CSS Modules*/}
      <Title/>
    </div>
  );
}

export default App;
