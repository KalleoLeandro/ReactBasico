import styles from './CarDetails.module.css'

const CarDetails = ({brand,model,km, isNew}) =>{
    return (
        <div className={styles.container}>
            <ul>
                <li>Marca: {brand}</li>
                <li>Modelo: {model}</li>
                <li>KM: {km}</li>
                {isNew && <li>Carro Novo</li>}
            </ul>  
        </div>      
    )
}

export default CarDetails;