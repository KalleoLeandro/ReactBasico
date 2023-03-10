const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log('Ativou o evento');
    }

    const renderSomething = (x)=>{
        if(x){
            return <h1>Renderizando if!</h1>
        } else {
            return <h1>Renderizando else!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou')}>Clique aqui também</button>
            </div>
            <div>
                <button onClick={()=>{
                    if(true){
                        console.log('Bloco errado');
                    }
                }}>Clique com bloco</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;