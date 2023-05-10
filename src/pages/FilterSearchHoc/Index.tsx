import React from "react";

import SearchUsers from "./User";
import SearchTodos from "./Todo";

import classes from "./Index.module.css";

const Index: React.FC = () => {
  return (
    <div className={classes["userList"]}>
      <SearchUsers />
      <SearchTodos />
    </div>
  );
};

export default Index;
