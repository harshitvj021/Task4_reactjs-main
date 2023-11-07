// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const simplifiedData = data.map((user, index) => {
          return {
            serialNumber: index + 1,
            firstName: user.name.split(' ')[0],
            lastName: user.name.split(' ')[1],
            gender: user.gender,
            email: user.email,
            username: user.username,
            domain: user.website.split('//')[1],
            ip: user.address.geo.lat + ', ' + user.address.geo.lng,
            university: user.company.name
          };
        });
        setUsers(simplifiedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.serialNumber}>
              <td>{user.serialNumber}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
