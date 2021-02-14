import Axios from "axios";
import React from "react";
import DashboardBody from "../components/DashboardBody";
import JobListBody from "../components/JobListBody";
import Navbar from "../components/Navbar";
import "../styles.css";

console.log("Hello Dashboard");

function Dashboard() {
  const [jobs, setJobs] = React.useState([]);
  // Axios({
  //   url: "/api/jobs",
  // }).then((res) => {
  //   setJobs(res.data);
  // });
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
            <DashboardBody jobs={jobs} setJobs={setJobs} />
            <JobListBody jobs={jobs} setJobs={setJobs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
