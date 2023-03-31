import './Home.css'

//2- links com react router
import { Link } from 'react-router-dom';

import { useFetch } from '../hooks/useFetch';

const Home = ()=>{
    const url = 'http://localhost:3000/products'

    const { data: items, loading, error} = useFetch(url);

    //3 - carregamento de dados
    return (
        <div>
            <h1>Produtos</h1>
            {error && <p>{error}</p>}
            <ul className='products'>
                {items && items.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$: {item.price}</p>
                        {/*4 rotas dinâmicas*/}
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )   
}

export default Home;