import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useHistory } from "react-router-dom";



const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);

        // this tells the app to clear the input fields
      if (email && password && name) {
        emailRef.current.value= "";
        psdRef.current.value = "";
        nameRef.current.value = "";
    }
    //this tells the app to send the user to the homepage after logging in
    history.push('/');
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
      <h2 className='text-white text-center'> New User</h2>

      <div className="input-container">
        <input placeholder="Email" type="email" ref={emailRef}   />
      </div>

      <div className="input-container">
        <input placeholder="Name" type="name" ref={nameRef}   />
      </div>

      <div className="input-container">
        <input placeholder="Password" type="password" ref={psdRef}    />
      </div>

      <div className="btn_container">
        <button className="btn" type="submit">Register</button>
      </div>
      </form>
    </div>
  );
};

export default Signup;