import React from "react";
import Buttons from "./../Forms/Button";
import { signInWithGoogle } from "./../../firebase/utils";

import "./styles.scss";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin">
      <div className="wrap">
        <h2>LogIn</h2>

        <div className="formWrap">
          <form onSubmit={handleSubmit}>
            <div className="socialSignin">
              <div className="row">
                <Buttons onClick={signInWithGoogle}>
                  Sign in with Google
                </Buttons>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
