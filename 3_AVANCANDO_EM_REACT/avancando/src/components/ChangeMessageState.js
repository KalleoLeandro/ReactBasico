const ChangeMessageState = ({handleMessage}) =>{

    const messages= ['oi', 'olá', 'Tudo bem?'];
    return (
        <div>
            <button onClick={()=>{handleMessage(messages[0])}}>Clique aqui </button>
            <button onClick={()=>{handleMessage(messages[1])}}>Clique aqui </button>
            <button onClick={()=>{handleMessage(messages[2])}}>Clique aqui </button>
        </div>
    )
}

export default ChangeMessageState;