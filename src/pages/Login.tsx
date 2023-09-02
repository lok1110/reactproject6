import React from "react";
import {useNavigate } from "react-router-dom";
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export function Login({ signOut, user }: WithAuthenticatorProps) {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/');
  }, []);

  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
   
    </>
  );
}

export default withAuthenticator(Login);