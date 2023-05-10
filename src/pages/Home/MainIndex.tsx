import { NavLink, Outlet } from "react-router-dom";

import classes from "./MainIndex.module.css";

const MainIndex = () => {
  return (
    <>
      <table className={classes["maintable"]}>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <NavLink
                to="login-auth-redux"
                // className={(isActive) =>
                //   isActive ? classes.active : undefined
                // }
                className={classes.active}
              >
                Login Authentication with Redux
              </NavLink>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>
              <NavLink
                to="curd-custom-hook"
                className={(isActive) =>
                  isActive ? classes.active : undefined
                }
              >
                Curd operation with custom Hook
              </NavLink>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>
              <NavLink
                to="filter-search-hoc"
                className={(isActive) =>
                  isActive ? classes.active : undefined
                }
              >
                Filter Search with Hoc
              </NavLink>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>
              <NavLink
                to="service-api-with-custom-hook"
                className={(isActive) =>
                  isActive ? classes.active : undefined
                }
              >
                Function based Service Api with Custom hook
              </NavLink>
            </td>
          </tr>
          <tr>
            <th>5</th>
            <td>
              <NavLink
                to="table-hoc"
                className={(isActive) =>
                  isActive ? classes.active : undefined
                }
              >
                Custom Table with Curd Operation In Hoc
              </NavLink>
            </td>
          </tr>
          <tr>
            <th>6</th>
            <td>
              <NavLink
                to="class-service-api-with-custom-hook"
                className={(isActive) =>
                  isActive ? classes.active : undefined
                }
              >
                Class based Serivce Api with custom hook
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MainIndex;
