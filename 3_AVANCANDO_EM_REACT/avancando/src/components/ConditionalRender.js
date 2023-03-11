import { useState } from "react";

const ConditionaRender = ()=>{
    
    const [x] = useState(false);

    let [name, setName] = useState('Kalleo');

    return <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            {name === 'Kalleo' ? (
            <div>
                <p>
                    True
                </p>
            </div>) 
            : (
                <div>
                <p>
                    False
                </p>
            </div>)}
            <button onClick={()=> setName("Leal")}>Mudar Nome</button>
        </div>;
}

export default ConditionaRender;