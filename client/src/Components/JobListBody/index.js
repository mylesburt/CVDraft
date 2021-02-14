import React, { useEffect, useState } from "react";
import axios from "axios";

function JobListBody(props) {
  //Create a jobs state using useState
  useEffect(() => {
    function loadJobs() {
      axios
        .get("/api/jobs")
        .then((res) => props.setJobs(res.data))
        .catch((err) => console.log(err));
    }

    loadJobs();
    //Do a GET request to /jobs
    //Update the jobs state upon getting response from backend
  }, []);

  return (
    <div className="col-span-4">
      {props.jobs.map((job) => {
        return (
          <div className="mt-3 space-y-1 px-4 pb-4">
            <div class="overflow-hidden shadow-md">
              <h2 key="" href={"/api/jobs"}>
                {job.title}
              </h2>
              <div class="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
                <p key="" href={"/api/jobs"}>
                  {job.dueDate}
                </p>
              </div>
              <p key="" href={"/api/jobs"}>
                {job.company}
              </p>
              <div class="p-6 bg-white border-b border-gray-200">
                <p key="" href={"/api/jobs"}>
                  {job.jobLink}
                </p>
              </div>
              <div class="p-6 bg-white border-gray-200 text-right">
                <a
                  class="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase"
                  href="#"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobListBody;
