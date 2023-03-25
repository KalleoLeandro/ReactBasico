import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user})=>{

    //Controlled inputs


    //Gerenciamento de dados

    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Enviando o formulário');
        console.log(name,email,bio,role);
        
        //Limpar formulário
        setName('');
        setEmail('');
        setBio('');
    }


    return (
        <div className="container">   
        {/*Criação de form*/}                            
            {/*envio de form*/}
            <form onSubmit={handleSubmit}>
            <h2>Forms</h2> 
                <div>
                    {/*Label envovendo o input*/}
                    <label>
                        <span>Nome: </span>
                        <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>                    
                    </label>
                    <label>
                        <span>Email: </span>
                        {/*Manipulação inline*/}
                        <input type="text" name="email" placeholder="Digite seu email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                    </label>
                    {/*Textarea*/}
                    <label>
                        <span>Bio: </span>
                        <textarea name="bio" placeholder='Descrição do usuário' onChange={(e)=>{setBio(e.target.value)}} value={bio}></textarea>
                    </label>
                    {/*Select*/}
                    <label>
                        <span>Função no Sistema: </span>
                       <select name="role" onChange={(e)=>{setRole(e.target.value)}} value={role}>
                            <option value="user">Usuário</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Administrador</option>
                       </select>
                    </label>
                </div>                
                
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}
 export default MyForm;
