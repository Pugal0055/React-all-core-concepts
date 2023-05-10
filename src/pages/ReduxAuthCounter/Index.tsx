import { useSelector } from "react-redux";

import Counter from "./Counter";
import Header from "./Header";
import Auth from "./Auth";
import UserProfile from "./UserProfile";

import classes from "./Index.module.css";

function App() {
  const isAuth = useSelector((state: any) => state.auth.isAuthentication);

  return (
    <div className={classes["container"]}>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      {isAuth && <Counter />}
    </div>
  );
}

export default App;
