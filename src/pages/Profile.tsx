


import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
export interface IProfile {}





const Profile: React.FunctionComponent<IProfile> = (props) =>{
  const [message,setMessage] =useState('');
    const {number} = useParams();

    useEffect(() => {
        if(number)
        {
            setMessage('The number is' + number)
        }
        else{
            setMessage('no number');

        }
    },[]);

  return (

    <div><h1>Profile</h1>{message}</div>
    
  );
};

export default Profile;