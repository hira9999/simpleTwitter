import React, { useState, useRef } from "react";
import { firebaseAuth } from "../firebase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const onSubmit = async (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    try {
      let data;
      if (newAccount) {
        data = await firebaseAuth.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await firebaseAuth.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleNewAccount = () => {
    setNewAccount((prev) => !prev);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input //
          type="text"
          placeholder="email"
          ref={emailRef}
          required
        ></input>
        <input
          type="text"
          placeholder="password"
          ref={passwordRef}
          required
        ></input>
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Login"}
        ></input>
        <span>{error}</span>
      </form>
      <span onClick={toggleNewAccount}>{newAccount ? "Sign In" : "LogIn"}</span>
    </div>
  );
};

export default Auth;
