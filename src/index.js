import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

export default async function getUsers() {
  let response = await fetch(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
  );
  let data = await response.json();
  return data;
}

getUsers().then((data)=>{
  data.map((user)=>{
    user.shortlisted=false;
    user.rejected=false;
    return user;
  })
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Main data={data}/>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
});


