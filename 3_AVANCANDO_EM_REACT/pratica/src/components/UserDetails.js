const UserDetails = ({ nome, idade, profissao }) => {
    return (
        <div className="container">
            <h2>Detalhes do Usuário</h2>
            <ul>
                <li>Nome {nome}</li>
                <li>Idade: {idade} anos</li>
                <li>Profissão: {profissao}</li>                
                {idade > 18 && <p>Este usuário é apto a habilitação</p>}
            </ul>
        </div>
    )
}

export default UserDetails;