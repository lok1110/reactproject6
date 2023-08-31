import React, { ReactComponentElement } from "react";
import { Outlet } from "react-router-dom";
import  Navbar  from "./navbar/Navbar";
export interface ILayoutComponentProps{}

const LayoutComponent:React.FunctionComponent<ILayoutComponentProps> = (props) => {
   
    return <>
    <Navbar/>
    <p>head</p> 
    <Outlet/>
    </>
};

export default LayoutComponent;