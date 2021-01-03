import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function UserList(props) {
  const { users } = props;
  return (
    <div id="list">
      {users.map((user) => {
        return (
          <Link className="link" to={"/"+user.id} key={user.id}><div id={user.id} className="userCard">
            <img src={user.Image} width="200px" alt="userImage" />
            <div className="userDetails">
              <p>
                <b>Name : </b>
                {user.name}
              </p>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
}
