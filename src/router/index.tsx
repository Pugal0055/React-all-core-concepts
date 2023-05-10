import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import useAuthguard from "src/hooks/useAuthguard";

const Login = React.lazy(() => import("src/pages/Login/Login"));
const Home = React.lazy(() => import("src/pages/Home/Index"));
const MainIndex = React.lazy(() => import("src/pages/Home/MainIndex"));
const ReduxLogin = React.lazy(() => import("src/pages/ReduxAuthCounter/Index"));
const CurdCustomHook = React.lazy(
  () => import("src/pages/CrudCustomHook/Index")
);
const FilterSearchHoc = React.lazy(
  () => import("src/pages/FilterSearchHoc/Index")
);
const ServiceApiWithHook = React.lazy(
  () => import("src/pages/ServiceApiWithHook/Index")
);
const TableHoc = React.lazy(() => import("src/pages/TableHoc/Index"));

const ClassServiceApiWithHook = React.lazy(
  () => import("src/pages/ServiceClassApiWithHook/Index")
);

function AuthGuard({ children }) {
  let isAuthenticated = useAuthguard();

  console.log(isAuthenticated);

  if (!isAuthenticated) return <Navigate to="/" />;

  return <>{children}</>;
}

let routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: (
      <Suspense>
        <AuthGuard>
          <Home />
        </AuthGuard>
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <MainIndex />,
      },
      {
        path: "login-auth-redux",
        element: <ReduxLogin />,
      },
      {
        path: "curd-custom-hook",
        element: <CurdCustomHook />,
      },
      {
        path: "filter-search-hoc",
        element: <FilterSearchHoc />,
      },

      {
        path: "service-api-with-custom-hook",
        element: <ServiceApiWithHook />,
      },
      {
        path: "table-hoc",
        element: <TableHoc />,
      },
      {
        path: "class-service-api-with-custom-hook",
        element: <ClassServiceApiWithHook />,
      },
    ],
  },
]);

export default routes;
