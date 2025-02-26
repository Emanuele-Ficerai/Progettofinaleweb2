import React, { useState } from "react";
import './App.css';

function App() {
  // Stato per memorizzare gli utenti
  const [users, setUsers] = useState([]);

  // Funzione per fare la richiesta agli utenti
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/users"); // URL dell'API Flask
      const data = await response.json();
      setUsers(data); // Imposta gli utenti nel state
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="App">
      <h1>Users List</h1>
      <button onClick={fetchUsers}>Mostra utenti</button> {/* Bottone per fetch */}
      
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id}>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Created At:</strong> {user.created_at}</p>
            </li>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
