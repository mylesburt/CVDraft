import React from "react";

// destructuring is great, makes it explicit what you're working with,
// so props can be destructured into the props you're passing by name

// this is just a presentational component - you don't want it doing any
// state management, just providing the layout of your data, and the button
// for deletion

function JobListBody({jobs, handleDelete}) {
  return (
    <div className="col-span-4">
      {jobs.map((job) => {
         // destructure your object to make it cleaner to use
        const {title, dueDate, company, jobLink} = job;

        return (
          <div key={title + dueDate} className="mt-3 space-y-1 px-4 pb-4">
            <div class="overflow-hidden shadow-md">
              <h2>{title}</h2>
              <div class="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
                <p>{dueDate}</p>
              </div>
              <p>{company}</p>
              <div class="p-6 bg-white border-b border-gray-200">
                <p>{jobLink}</p>
              </div>
              <div class="p-6 bg-white border-gray-200 text-right">
                <button
                  class="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase"
                   // we're passing the title through this function
                   // so we can delete the job based on it's title
                  onClick={() => handleDelete(title)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobListBody;
