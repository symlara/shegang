import React, { useState } from "react";
import Signin from '../components/signin';
import Signup from "../components/signup";

const Auth = () => {
    const [index, setIndex] = useState(false);
    const toggleIndex = () => {
        setIndex((prevState) => !prevState);
      };

      return (
          <div className="container text-white text-center cursor-pointer">
              {!index ? <Signin /> : <Signup />}
              <p onClick={toggleIndex}>
              {!index ? "New user? Click here " : "Already have an account?"}
              </p>
          </div>
      );
}

export default Auth;