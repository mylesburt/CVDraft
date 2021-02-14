import React from "react";
import "../../styles.css";
// import SmallText from "../SmallText";
// import Inputbox from "../Inputbox";
// import Button from "../Button";

function JobsHeader(props) {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-800 text-white">
      <p className="py-3">Create a job</p>
      {/* <div className="mt-3 space-y-1 px-4 pb-4">
        <SmallText smallText="Job: " />
        <Inputbox />
        <SmallText smallText="Company: " />
        <Inputbox />
        <SmallText smallText="Due Date: " />
        <Inputbox />
        <SmallText smallText="URL: " />
        <Inputbox />
      </div>
      <div className="px-4 pb-4 flex items-center justify-center">
        <Button buttontext="+" />
      </div> */}
    </div>
  );
}

export default JobsHeader;
