import { useState, useEffect } from 'react';
import './App.css';
import UserCard from './components/UserCard';

const URL = "https://random-data-api.com/api/users/random_user?size=10";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <button className="px-4 py-2 my-10 font-semibold text-white bg-red-700 rounded-lg" onClick={() => fetchUsers(URL)}>Fetch Random</button>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {users.map(user => (
          <UserCard 
            {...user} 
            key={user.id} 
          />)
        )}
      </div>
      
    </div>
  );
}

export default App;
