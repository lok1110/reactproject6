
import './App.css';

import React, { useState ,useEffect} from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LayoutComponent from './components/Layout';
import Login from './pages/Login';
import LMS from './pages/LMS';

export interface IApp {}

const App:React.FunctionComponent<IApp> = (props) =>{
    

    return(
        <BrowserRouter>
            <Routes>
           
                <Route path ="/" element={<LayoutComponent/>}>
                    <Route index  element={<Home/>}/>
                    <Route path="/login"  element={<Login/>}/>
                    <Route path="/lms"  element={<LMS/>}/>
                    <Route path=":number" element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );

};
export default App;