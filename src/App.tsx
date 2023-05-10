import { RouterProvider } from "react-router-dom";

import "./App.css";

import routes from "./router/index";

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;
