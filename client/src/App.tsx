import './App.css'
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([''])

  const getUsers = async () => {
    await fetch("http://localhost:8080/users")
      .then(res => res.json())
      .then(data => data.map(user => 
        user.email
      ))
      .then(userList => setUsers(userList))
      .catch(err => {
        window.alert(err);
        return;
      })
  }

  return (
    <>
      <h1>eNuts</h1>
      <div className="card">
        <button onClick={() => getUsers()}>
            Get Users
        </button>
        {users.map(user => <p>{user}</p>)}
      </div>
    </>
  )
}

export default App
