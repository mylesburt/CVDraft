import React from "react";
import Button from "../components/Button";
import Inputbox from "../components/Inputbox";
import Title from "../components/Title";
import SmallText from "../components/SmallText";
import "../styles.css";
import { Link } from "react-router-dom";

console.log("Hello SignUp");

function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen bg-yellow-300 bg-opacity-75">
      <div className="inline-block align-middle bg-white shadow-md rounded px-8 py-8 pt-8">
        <div className="grid justify-items-center">
          <Title title="Sign Up" />
        </div>
        <div className="px-4 pb-4">
          <SmallText smallText="First Name" />
          <Inputbox placeholderText="First Name..." />
        </div>
        <div className="px-4 pb-4">
          <SmallText smallText="Last Name" />
          <Inputbox placeholderText="Last Name..." />
        </div>
        <div className="px-4 pb-4">
          <SmallText smallText="Email" />
          <Inputbox placeholderText="john.smith@gmail.com" />
        </div>
        <div className="px-4 pb-4">
          <SmallText smallText="Password" />
          <Inputbox placeholderText="Enter password here" />
        </div>
        <div className="px-4 pb-4">
          <SmallText smallText="Confirm Password" />
          <Inputbox placeholderText="Confirm password here" />
        </div>
        <div className="grid justify-items-center">
          <div className="flex space-x-4 px-4 pb-4">
            <Link to="/dashboard">
              <Button buttontext="Create Account" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
