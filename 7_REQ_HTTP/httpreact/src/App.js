import './App.css';
import { useState, useEffect } from 'react';

// 4 - custom hook
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products';

function App() {

  const [products, setProducts] = useState([]);

  //4 - custom
  const { data: items, httpConfig, loading } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //1 - resgatando dados
  /*
  useEffect(() => {

    async function fetchData(){
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    
    fetchData();
  }, []);
  */


  //2 - adição de produtos
  const handleSubmit = async (event) => {
    event.preventDefault();    

    const product = {
      name: name,
      price: price
    };
    /*
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products)
    })          

    //3 carregamento dinâmico
    const addedProduct = await res.json();
    */

    //5 - refatorando post    
    httpConfig(product, "POST");
  }



  //setProducts((prev)=>[...prev, addedProduct])



  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      
      {/**/}
      {loading && <p>Carregando dados...</p>}
      {!loading &&  (<ul>
        {items && items.map((product) => (<li key={product.id}> {product.name} - R$: {product.price}</li>))}
      </ul>)}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}></input>
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}></input>
          </label>
          {/*7 - Loading no post*/}    
          {loading && (<input type="text" disabled value="Aguarde" />)}     
          {!loading && (<input type="submit" value="Enviar" />)}
        </form>
      </div>
    </div>
  );
}

export default App;
