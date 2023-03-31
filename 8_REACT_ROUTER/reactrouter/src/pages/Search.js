import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
    const [searchParams] = useSearchParams();

    const url = 'http://localhost:3000/products?' + searchParams;

    const { data: items, error, loading } = useFetch(url);
    return (
        <div>
            <h1>Resultados obtidos</h1>
            {error && <p>{error}</p>}
            {loading && <p>Carregando busca</p>}
            {!loading && (
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
            )}
        </div>
    )
}

export default Search;