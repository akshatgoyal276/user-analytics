import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function UserDisplay(props) {
  const {user,toggleShortlist,toggleRejected} = props;
//   React.useEffect(()=>{
//     let temp=users.filter(element => {
//         if(element.id.toString()===id.toString()){
//             return true;
//         }
//         else return false;
//     });
//     setUser(temp[0]);
//   },[users,id])
  return (
    <div className="user">
        <img src={user.Image} width="200px" alt="userImage" />
        <div className="userDetails">
            <p>
                <b>Name : </b>
                {user.name}
            </p>
            <button
                className={(user.shortlisted ? "red" : "green") + " select"}
                onClick={(event)=>{
                        toggleShortlist(user.id);
                    }}>
                    {user.shortlisted ? "Remove from Shortlist" : "Add to ShortList"}
            </button>
            <button
                className={(user.rejected ? "red" : "green") + " select"}
                onClick={(event)=>{toggleRejected(user.id);}}>
                    {user.rejected ? "Remove from Rejected" : "Add to Rejected"}
            </button>
        </div>
    </div>
  );
}
