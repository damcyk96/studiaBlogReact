import React, { useState, useReducer, useEffect } from "react";
import axios from 'axios';
import "./blogList.scss";

// const getTempCssClass = temp => {
//   if (temp < 100) {
//     return "blog-list_normal";
//   } else if (temp < 400) {
//     return "blog-list_warning";
//   }
//   return "blog-list_fatal";
// };

// const BlogList = () => {
//   const [temp, setTemp] = useState(100);
//   return (
//     <>
//       <button onClick={() => setTemp(prev => prev + 50)}>+</button>
//       <p className={getTempCssClass(temp)}>{temp}</p>
//       <button onClick={() => setTemp(prev => prev - 50)}>-</button>
//     </>
//   );
// };

const BlogList = () => {
    const loadData = async () => {

        const [users, setUser] = useState([]);
    useEffect( () => {

        (async () => {
    const user = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(users.data);
    }) ();
    loadData();
    }, []);

    console.log(users);
  return <>
  {users.map((x, index) => <div key={index}>
      <p>{x.name}</p>
      <p>{x.phone}</p>
  </div>)}
  </>;
};

export default App;
