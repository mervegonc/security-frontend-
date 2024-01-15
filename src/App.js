
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = 'http://localhost:8080/get?user=' + user;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa('learn:password')
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.text();
setResponse(data);

    } catch (error) {
      console.error('Fetch error:', error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        </label>
        <button type="send">Send</button>
      </form>
      <div>
        Response: {response}
      </div>
    </div>
  );
}

export default App;
