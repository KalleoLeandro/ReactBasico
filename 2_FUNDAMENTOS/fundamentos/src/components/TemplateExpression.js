const TemplateExpression = () => {
    
    const name = "Kalleo";

    const data = {
        age: 34,
        job: "Programador"
    }
    
    return (
        <div>
            <h1>{name}</h1>
            <h3>{data.age} anos - {data.job}</h3>
            <p>{4+4}</p>
            <p>{console.log('teste')}</p>
        </div>
    );
}

export default TemplateExpression;