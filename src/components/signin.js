import React, { useRef, useState } from "react";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth, db } from '../firebase/index';
import { doc, updateDoc } from 'firebase/firestore';

import { useUserContext } from "../context/userContext";

import { useHistory } from "react-router-dom";


const Signin = () => {
  const [data, setData ] = useState({
    email: '',
    password: '',
    error: null,
    loading: false,
});




  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);

    if ( !email || !password) {
      setData({ ...data, error: "All fields are required" });
    }

    try {   
      const result = await signInWithEmailAndPassword(
          auth,
          emailRef,
          psdRef
      );
      await updateDoc(doc(db, 'users', result.user.uid), {
          isOnline: true
      });
      setData({
          email: '', 
          password: '', 
          error: null, 
          loading: false
      });
      history.replace('/');
  } catch(err) {
      setData({ ...data, error: err.message, loading: false });
  }

    // this tells the app to clear the input fields
    if (email && password) {
      emailRef.current.value= "";
      psdRef.current.value = "";
    }
//this tells the app to send the user to the homepage after logging in
    history.push('/');
    
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };




  
  return (
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>

        <div className="input-container">
        <input placeholder="Email" type="email" ref={emailRef} />
        </div>

        <div className="input-container">
        <input placeholder="Password" type="password" ref={psdRef} />
        </div>

        <div className="btn_container">
        <button className="btn" type="submit">Sign In</button>
        </div>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
    </div>
  );
};

export default Signin;