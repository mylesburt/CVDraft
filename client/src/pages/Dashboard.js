import axios from "axios";
import React, { useEffect } from "react";
import DashboardBody from "../components/DashboardBody";
import JobListBody from "../components/JobListBody";
import Navbar from "../components/Navbar";
import "../styles.css";

console.log("Hello Dashboard");

function Dashboard() {
  const [jobs, setJobs] = React.useState([]);

  useEffect(() => {
    loadJobs();
  }, [])
  
  const loadJobs = () => {
    axios
      .get("/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  };

  const submitHandler = (formData) => {
    setJobs(formData);
    sendJobs();
  }

  const sendJobs = (event) => {
    event.preventDefault();
    console.log(jobs);
    axios
      .post("/api/jobs", jobs)
      .then((response) => {
        loadJobs();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (title) => {
    // using filter to allow through all job titles
    // that aren't equal to the one we're passing into our function
    const remainingJobs = jobs.filter(job => job !== title)
    setJobs(remainingJobs)
  }

  return (
    <div className="container mx-auto">
      <div className="grid-rows-1">
        <div className="grid grid-cols-12">
          <div className="col-span-full">
            <Navbar
              navHeader="CV Draft (replace with prop logo)"
              navUserId="*prop in user first and last name*"
            />
          </div>
        </div>
        <div className="grid-rows-1">
          <div className="grid grid-cols-12">
          {/*You want these to be 'dumb' or 'presentational' components they just 
          render the state, or whatever - https://reactjs.org/docs/lifting-state-up.html*/}
            <DashboardBody submitHandler={submitHandler} />
            <JobListBody jobs={jobs} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
