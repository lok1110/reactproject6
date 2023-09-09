import React,{useState, useEffect} from "react";
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export function Login({ signOut, user }: WithAuthenticatorProps) {
 


  useEffect(() => {
   
  }, [user])

  return (
    <>
    
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Login);