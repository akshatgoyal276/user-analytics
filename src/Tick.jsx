import React from "react";

export default function Tick(props) {
    const {count , incrementCount}=props
  return (
    <div className="tick">
        <button onClick={(event)=>incrementCount()}>{count}</button>
    </div>
  );
}
