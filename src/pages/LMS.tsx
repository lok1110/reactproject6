import { Auth } from 'aws-amplify';
import React, { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";

export interface ILMSProps {}

interface ResendConfCodeParameters {
  username: string;
}



const LMS: React.FunctionComponent<ILMSProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div>
  
 
      <h1>LMS</h1>
    </div>
  );
};

export default LMS;
