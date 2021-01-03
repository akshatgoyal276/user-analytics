import React from 'react';
import UserList from './UserList';
import './App.css';

function App(props) {
  const {data}=props;
  const [userDisplay, setUserDisplay] = React.useState(data);

  function applyFilter(byName) {
    let temp = data.filter((user) => {
      if (user.name.toLowerCase().includes(byName.toLowerCase())) {
        return true;
      }
      return false;
    });
    setUserDisplay(temp);
  }

  return (
    <div className="App">
      <div className="center">
        <input
          id="searchByName"
          onChange={(event) => {
            applyFilter(event.target.value);
          }}
          placeholder="Enter Name"
        ></input>
      </div>
      <UserList
        users={userDisplay}
      />
    </div>
  );
}

export default App;
