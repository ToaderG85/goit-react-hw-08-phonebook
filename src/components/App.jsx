import React from "react";

import { Routes, Route} from 'react-router-dom';

import Home from "pages/Home/Home";
import { Phonebook } from "./Phonebook/Phonebook";
import LoginPage from "pages/LoginPage/LoginPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import PrivateRoutes from "routes/PrivateRoutes";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route path='/phonebook' element={<Phonebook/>}/>
          </Route>
          <Route path='*' element={<NotFoundPage/>}/>        
      </Routes>
    </div>
  );
}
