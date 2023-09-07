
import './App.css';
import React, { useState ,useEffect} from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LayoutComponent from './components/Layout';
import Login from './pages/Login';
import LMS from './pages/LMS';
import  Test from './pages/Test';
import { createContext } from "react";
import { MyGlobalContext } from './components/context/MyGlobalContext';





export interface IApp {}


const App:React.FunctionComponent<IApp> = (props) =>{
    const [copy, setCopy] = useState<string|undefined>('abc')
    return(
        <MyGlobalContext.Provider value= {{ copy, setCopy }}>
        <BrowserRouter>
           
            <Routes>
           
                <Route path ="/" element={<LayoutComponent/>}>
                    <Route index  element={<Home/>}/>
                    <Route path="/login"  element={<Login/>}/>
                    <Route path="/lms"  element={<LMS/>}/>
                    <Route path="/test"  element={<Test/>}/>
                    <Route path=":number" element={<Profile/>}/>
                </Route>
            </Routes>
           
        </BrowserRouter>
        </MyGlobalContext.Provider>
    );

};
export default App;