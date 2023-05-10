// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuthguard = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.authentication.isAuthentication
  );
  return isAuthenticated;
};

export default useAuthguard;

/* 


































*/
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";

// const useAuthguard = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector(
//     (state: any) => state.authentication.isAuthentication
//   );

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   return isAuthenticated;
// };

// export default useAuthguard;
