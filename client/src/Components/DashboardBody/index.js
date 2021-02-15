import React, { useState } from "react";
import JobsHeader from "../JobsHeader";
import SmallText from "../SmallText";
import Inputbox from "../Inputbox";
import Button from "../Button";

function DashboardBody({submitHandler}) {
  const [values, updateFormValues] = useState()

  const changeHandler = (event) => {
    updateFormValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const { title, company, dueDate, jobLink } = values;
  return (
    <div className="col-span-3 bg-gray-300">
      <JobsHeader />
      <form onSubmit={submitHandler}>
        <div className="mt-3 space-y-1 px-4 pb-4">
          <SmallText smallText="Job: " />
          <Inputbox
            inputName="title"
            inputValue={title}
            inputOnChange={e => changeHandler(e)}
          />
          <SmallText smallText="Company: " />
          <Inputbox
            inputName="company"
            inputValue={company}
            inputOnChange={e => changeHandler(e)}
          />
          <SmallText smallText="Due Date: " />
          <Inputbox
            inputName="dueDate"
            inputValue={dueDate}
            inputOnChange={e => changeHandler(e)}
          />
          <SmallText smallText="URL: " />
          <Inputbox
            inputName="jobLink"
            inputValue={jobLink}
            inputOnChange={e => changeHandler(e)}
          />
        </div>
        <div className="px-4 pb-4 flex items-center justify-center">
          <Button buttontext="+" />
        </div>
      </form>
    </div>
  );
}

export default DashboardBody;
