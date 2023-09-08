
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LayoutComponent from './components/Layout';
import LMSUpload from './pages/LMSUpload';
import Login from './pages/Login';
import { LMSReport } from './pages/lms/LMSReport';







export interface IApp {}


const App:React.FunctionComponent<IApp> = (props) =>{
  
    return(
      
        <BrowserRouter>
           
            <Routes>
           
                <Route path ="/" element={<LayoutComponent/>}>
                    <Route index  element={<Home/>}/>
                    <Route path="/login"  element={<Login/>}/>
                    <Route path="/lmsUpload"  element={<LMSUpload/>}/>
                    <Route path="/lmReport"  element={<LMSReport/>}/>
                    <Route path=":number" element={<Profile/>}/>
                </Route>
            </Routes>
           
        </BrowserRouter>
     
    );

};
export default App;