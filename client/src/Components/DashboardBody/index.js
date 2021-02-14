import React, { Component } from "react";
import JobsHeader from "../JobsHeader";
import SmallText from "../SmallText";
import Inputbox from "../Inputbox";
import Button from "../Button";
import axios from "axios";

class DashboardBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      company: "",
      dueDate: "",
      jobLink: "",
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("/api/jobs", this.state)
      .then((res) => {
        this.loadJobs();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  loadJobs = () => {
    axios
      .get("/api/jobs")
      .then((res) => this.props.setJobs(res.data))
      .catch((err) => console.log(err));
  };

  render() {
    const { title, company, dueDate, jobLink } = this.state;
    return (
      <div className="col-span-3 bg-gray-300">
        <JobsHeader />
        <form onSubmit={this.submitHandler}>
          <div className="mt-3 space-y-1 px-4 pb-4">
            <SmallText smallText="Job: " />
            <Inputbox
              inputName="title"
              inputValue={title}
              inputOnChange={this.changeHandler}
            />
            <SmallText smallText="Company: " />
            <Inputbox
              inputName="company"
              inputValue={company}
              inputOnChange={this.changeHandler}
            />
            <SmallText smallText="Due Date: " />
            <Inputbox
              inputName="dueDate"
              inputValue={dueDate}
              inputOnChange={this.changeHandler}
            />
            <SmallText smallText="URL: " />
            <Inputbox
              inputName="jobLink"
              inputValue={jobLink}
              inputOnChange={this.changeHandler}
            />
          </div>
          <div className="px-4 pb-4 flex items-center justify-center">
            <Button buttontext="+" />
          </div>
        </form>
      </div>
    );
  }
}

export default DashboardBody;
