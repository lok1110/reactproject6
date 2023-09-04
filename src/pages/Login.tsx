import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import Navbar from "../components/navbar/Navbar";
Amplify.configure(awsconfig);



export function Login({ signOut, user }: WithAuthenticatorProps) {
  const navigate = useNavigate();

 

  return (
    <>
      
     
      
      <button onClick={signOut}>Sign out</button>
   
    </>
  );
}

export default withAuthenticator(Login);