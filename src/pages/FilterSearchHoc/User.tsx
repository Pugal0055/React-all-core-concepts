import classes from "./Index.module.css";

// import HocJs from "../../components/hoc/hocjs";
// import HocWithClass from "../../components/hoc/HocWithClass";
import HocWithFunction from "../../components/hoc/FilterSearch/HocWithFunction";

const Users: React.FC = ({ data }: any, props) => {
  let renderUsers = data.map((user: any) => {
    return (
      <li key={user.id}>
        <p> {user.name}</p>
      </li>
    );
  });

  return (
    <div className={props.className}>
      <ul>{renderUsers}</ul>
    </div>
  );
};

const SearchUsers = HocWithFunction(Users, "users", classes["user"]);

export default SearchUsers;

// import React, { useEffect, useState } from "react";

// const User: React.FC<{ className: string }> = (props) => {
//   const [users, setUser] = useState<any[]>([]);
//   const [searchUser, setSearchUser] = useState("");

//   useEffect(() => {
//     const userData = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();
//       setUser(data);
//     };

//     userData();
//   }, []);

//   let filterUsers = users
//     .filter(({ name }) => name.toLowerCase().match(searchUser.toLowerCase()))
//     .map((user) => {
//       return <li key={user.id}> {user.name} </li>;
//     });

//   console.log(filterUsers);

//   return (
//     <div className={props.className}>
//       <input
//         type="text"
//         onChange={(e) => {
//           setSearchUser(e.target.value);
//         }}
//       />

//       <ul>{filterUsers}</ul>
//     </div>
//   );
// };

// export default User;
