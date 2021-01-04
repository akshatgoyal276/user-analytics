import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function UserDisplay(props) {
  const {user,toggleShortlist,toggleRejected} = props;
  const [rejected,setRejected]=React.useState(user.rejected);
  const [shortlisted,setShortlisted]=React.useState(user.shortlisted);
  return (
    <div className="user center">
        <img src={user.Image} alt="userImage" className="img"/>
        <div className="userDetails">
            <p>
                <b>Name : </b>
                {user.name}
            </p>
            <Link to="/"><button
                className={(shortlisted ? "red" : "green") + " select"}
                onClick={(event)=>{
                        toggleShortlist(user.id);
                        setShortlisted(!shortlisted)
                    }}>
                    {shortlisted ? "Remove from Shortlist" : "Add to ShortList"}
            </button></Link>
            <Link to="/"><button
                className={(rejected ? "red" : "green") + " select"}
                onClick={(event)=>{toggleRejected(user.id);setRejected(!rejected);}}>
                    {rejected ? "Remove from Rejected" : "Add to Rejected"}
            </button></Link>
        </div>
    </div>
  );
}
