import React from "react";
import { Auth } from 'aws-amplify';

type SignUpParameters = {
  username: string;
  password: string;

};

type ConfirmSignUpParameters = {
  username: string;
  code: string;
};

export async function confirmSignUp({ username, code }: ConfirmSignUpParameters) {
  try {
    await Auth.confirmSignUp(username, code, {
      forceAliasCreation: false,
    });
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}

export async function SignUp({ username, password }: SignUpParameters) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
    
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
  return <div>test</div>
}

export default SignUp