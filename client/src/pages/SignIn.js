import React, { useState } from "react";
import Title from "../components/Title/index";
import "../styles.css";
import Inputbox from "../components/Inputbox";
import Button from "../components/Button";
import SmallText from "../components/SmallText";
import { Link } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // Once your sign in is returning - where are you querying the JWT
  // and how are you letting the app know a user is authenticated?

  // You will also want to redirect on login, given you're using React Router
  // this link ought to help https://serverless-stack.com/chapters/redirect-on-login-and-logout.html

  async function handleSumbit(e) {
    e.preventDefault();
    try {
      const registerData = {
        email,
        password,
      };
      // axios.post("/api/login", registerData)
      await axios.post("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-yellow-300 bg-opacity-75">
      <div className="inline-block align-middle bg-white shadow-md rounded px-8 py-8 pt-8">
        <div className="grid justify-items-center">
          <Title title="Job Drafter" />
        </div>
        <form onSubmit={handleSumbit}>
          <div className="px-4 pb-4">
            <SmallText smallText="Email" />
            <Inputbox
              inputType="email"
              inputOnChange={(e) => setEmail(e.target.value)}
              placeholderText="example@gmail.com"
            />
          </div>
          <div className="px-4 pb-4">
            <SmallText smallText="Password" />
            <Inputbox
              inputType="password"
              inputOnChange={(e) => setPassword(e.target.value)}
              placeholderText="Enter password here"
            />
          </div>
          <div className="grid justify-items-center">
            <div className="flex space-x-4 px-4 pb-4">
              <Button buttontext="Log In" />
              <Link to="/signup">
                <Button
                  buttonOnClick={register}
                  buttontext="Sign Up"
                  buttondisable={!validateForm()}
                />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
