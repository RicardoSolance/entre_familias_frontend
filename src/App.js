import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.scss";
import { BrowserRouter } from 'react-router-dom';
import {userContext} from "./context/userContext";
import { useState } from "react";

function App() {
  const [user, setuser] = useState("");

  const login = (newUser) =>{
    setuser(newUser);
  }

  const logout = () =>{
    setuser("");
    localStorage.removeItem('token');
  }

  const userObj = {
    login,
    user,
    logout
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={userObj}>
          <Header/>
          <Main/>
        </userContext.Provider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
