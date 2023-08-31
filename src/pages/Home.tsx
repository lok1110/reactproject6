import { Auth } from 'aws-amplify';
import React, { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";

export interface IHomePageProps {}

interface ResendConfCodeParameters {
  username: string;
}



const Home: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div>
  
      <Link to="/Profile">Go to Profile</Link>
      <button onClick={() => navigate('/layout/55')}>Go to layout</button>
      <h1>WELCOME TO HOME PAGE</h1>
    </div>
  );
};

export default Home;
