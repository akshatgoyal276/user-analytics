import React from "react";
import App from './App';
import { Route, Switch } from "react-router-dom";
import UserDisplay from "./UserDisplay";
import UserList from "./UserList";
import Tick from './Tick';

export default function Main(props) {
    const {data}=props;
  const [users, setUsers] = React.useState(data);
  const [count , setCount] = React.useState(0);
  const incrementCount=()=>{
      setCount(count+1);
  }
  const toggleShortlist=(id)=>{
    let temp = users;
    temp.map((user) => {
      if (user.id.toString() === id.toString()) {
        if (user.shortlisted === true) {
          user.shortlisted = false;
        } else {
          user.shortlisted = true;
        }
      }
      return user;
    });
    setUsers(temp);
  }

  const toggleRejected=(id)=>{
    let temp = users;
    temp.map((user) => {
      if (user.id === id) {
        if (user.rejected === true) {
          user.rejected = false;
        } else {
          user.rejected = false;
        }
      }
      return user;
    });
    setUsers(temp);
  }
  return (
      <Switch>
        <Route
          exact
          path="/rejected"
          render={() => {
            return <UserList users={users.filter((user)=>{
                return user.rejected;
            })}/>
            // <Rejected data={users} />;
          }}
        />
        <Route
          exact
          path="/shortlisted"
          render={() => {
            return <UserList users={users.filter((user)=>{
                return user.shortlisted;
            })}/>
            //return <ShortListed data={users} />;
          }}
        />
        <Route
          exact
          path="/tick"
          render={(props) => {
            return (
              <Tick count={count} incrementCount={incrementCount}/>
            );
          }}
        />
        <Route
            exact
          path={"/:id"}
          render={(props) => {
            return (
              <UserDisplay
                user={users.filter(element => {
                    if(element.id.toString()===props.match.params.id.toString()){
                        return true;
                    }
                    else return false;
                })[0]}
                toggleShortlist={toggleShortlist}
                toggleRejected={toggleRejected}
              />
            );
          }}
        />
        <Route
            exact
          path="/"
          render={() => {
            return <App data={users} />;
          }}
        />
      </Switch>
  );
}
