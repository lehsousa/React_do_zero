import {useState} from 'react'

const ListRender = () => {
  const[list] = useState(["Leandro", "Camila", "Caio","Dudu"]);

  const [users, setUsers] = useState([
    {id:1, name: "Leandro", age: 39},
    {id:2, name: "Camila", age: 25},
    {id:3, name: "Caio", age: 9},
    {id:4, name: "Dudu", age: 5}
  ]);

const deleteRandom = () =>{
  const randomNumber = Math.floor(Math.random() * 5);
  
  setUsers((prevUsers) => {
    console.log(prevUsers);
      return prevUsers.filter((user)=> randomNumber !== user.id)
  })
}

  return (<div>
      <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
      </ul>
      <ul>
        {users.map((user) =>(
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender