import "./Curriculo.css";

const Curriculo = () => {
    return (
        <>
            <div className="container">
                <div className="conteudo">
                    <div className="titulo">
                        <h1>
                            Kalleo Leandro dos Santos Leal
                        </h1>
                    </div>
                    <div className="apresentacao">
                        <div className="subtitulo">
                            <h1>Sobre mim</h1>
                        </div>
                        <section>
                            <p>
                                Sou programador Java e Node.js e atualmente em Estudos de Tecnologias Front-end (React e Angular)
                            </p>
                        </section>
                    </div>
                    <div className="escolaridade">
                        <div className="subtitulo">
                            <h1>Escolaridade</h1>
                        </div>
                        <section>
                            <ul>
                                <li>Bacharelado em Sistemas de Informação - Universidade Positivo</li>
                                <li>Bacharelado em Engenharia de Software - Uninter</li>
                            </ul>
                        </section>
                    </div>
                    <footer>
                        <div className="subtitulo">
                            <h1>Contato</h1>
                        </div>
                        <section>
                            <ul>
                                <li>Telefone: <span>(--) - ---- ----</span></li>
                                <li>Email: <span>teste@teste.com</span></li>
                            </ul>
                        </section>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Curriculo;