import { useState } from 'react';

const ListRender = ()=>{

    const deleteRandom = ()=>{
        const  randomNumber = Math.floor(Math.random()*4);
        setUsers((prevUser)=>{
            console.log(prevUser);
            return prevUser.filter((user)=> randomNumber !== user.id);
        });
    }

    const [list] = useState(['Kalleo', 'Leandro', 'Leal']);

    const [users,setUsers] = useState([
        {
            id:1,
            name: 'Kalleo',
            age: 34
        },
        {
            id:2,
            name: 'Leandro',
            age: 31
        },
        {
            id:3,
            name: 'Leal',
            age: 28
        }
    ])
    return (
        <div>
            <ul>
                {list.map((item, i)=>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    )
}

export default ListRender; 