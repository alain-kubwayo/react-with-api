import { useState, useEffect } from 'react';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState('https://random-data-api.com/api/users/random_user?size=10');

  const fetchUsers = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers(url);
  }, [url]);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-5">
      <button className="bg-red-700 font-semibold px-4 py-2 text-white rounded-lg my-10" onClick={() => fetchUsers(url)}>Fetch Random</button>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
