import React,{useState, useEffect} from "react";
import {useNavigate } from "react-router-dom";
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { useGlobalContext } from "../components/context/MyGlobalContext"; 

Amplify.configure(awsconfig);

export function Login({ signOut, user }: WithAuthenticatorProps) {
  const navigate = useNavigate();
  const { copy, setCopy } = useGlobalContext()

  useEffect(() => {
    setCopy(user?.username)
  }, [user])

  return (
    <>
      {copy}
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Login);