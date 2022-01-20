import React from "react";
import './Job.css'
import JobsTable from "../JobsTable/JobsTable";
import NewJob from "../NewJob/NewJob";

// core components

function Job() {
  return (
    <>
        <div className="job-container container">
            <div className="row">
                <div className="col-xl-4 job-grid job-form-container">
                    <div className="job-header job-left-create">
                        <p className="job-create-title">Create Job</p>
                        <NewJob />
                    </div>
                </div>
                <div className="col-xl-8 job-grid job-right-template">
                    <div className="job-header job-right">
                        <p className="job-create-title">Jobs</p>
                        <JobsTable />
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Job;
