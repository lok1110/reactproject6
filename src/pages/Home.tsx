
import React, { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from '../components/context/MyGlobalContext'; 
export interface IHomePageProps {}





const Home: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate();
  const { copy } = useGlobalContext()
  return (
    <div>
        <p>{copy}</p> 
      <Link to="/Profile">Go to Profile</Link>
      <button onClick={() => navigate('/layout/55')}>Go to layout</button>
      <h1>WELCOME TO HOME PAGE</h1>
    </div>
  );
};

export default Home;
