//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router} from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import EmpNavBar from "./employee/EmpNavBar";
import { useEffect, useState } from "react";

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isEmpLoggedIn, setIsEmpLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    const empLoggedIn = localStorage.getItem("isEmpLoggedIn") === "true";

    setIsAdminLoggedIn(adminLoggedIn);
    setIsEmpLoggedIn(empLoggedIn);
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem("isAdminLoggedIn", true);
    setIsAdminLoggedIn(true);
  };

  const onEmpLogin = () => {
    localStorage.setItem("isEmpLoggedIn", true);
    setIsEmpLoggedIn(true);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setIsAdminLoggedIn(false);
  };

  const handleEmpLogout = () => {
    localStorage.removeItem("isEmpLoggedIn");
    setIsEmpLoggedIn(false);
  };

  return (
    <div >
       <br/>
      <Router>
        {
          isAdminLoggedIn ? (
            <AdminNavBar/>
          ) : isEmpLoggedIn ? (
            <EmpNavBar/>
          ) :
          (
            <MainNavBar 
              onAdminLogin = {onAdminLogin}
              onEmpLogin = {onEmpLogin}
            />
          )} 

      </Router>
      
    </div>
  );
}

export default App;
