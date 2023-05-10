import HocWithClass from "../../components/hoc/FilterSearch/HocWithClass";
import classes from "./Index.module.css";

const Todos: React.FC<{ className: string }> = ({ data }: any, props) => {
  // let filterUsers = users
  //   .slice(0, 10)
  //   .filter(({ title }) => title.toLowerCase().match(searchUser.toLowerCase()))
  //   .map((user) => {
  //     return <li key={user.id}> {user.title} </li>;
  //   });

  let renderTodos = data.map((todo: any) => {
    return (
      <li key={todo.id}>
        <p>{todo.title}</p>
      </li>
    );
  });

  return (
    <div className={props.className}>
      <ul>{renderTodos}</ul>
    </div>
  );
};

const SearchTodos = HocWithClass(Todos, "todos", classes["todo"]);

export default SearchTodos;

// import { useEffect, useState } from "react";

// const User: React.FC<{ className: string }> = (props) => {
//   const [users, setUser] = useState<any[]>([]);
//   const [searchUser, setSearchUser] = useState("");

//   useEffect(() => {
//     const userData = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const data = await res.json();
//       // console.log(data, "todo");
//       setUser(data);
//     };

//     userData();
//   }, []);

//   let filterUsers = users
//     .slice(0, 10)
//     .filter(({ title }) => title.toLowerCase().match(searchUser.toLowerCase()))
//     .map((user) => {
//       return <li key={user.id}> {user.title} </li>;
//     });

//   // console.log(filterUsers);

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
