import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Table
} from "reactstrap";
import './JobsTable.css'

// core components


function JobsTable() {
    const defaultJobs = [
        {
            id: 1,
            description: 'Add new ideas to Skedulo Hackathon 2022',
            status: 'Done'
        },
        {
            id: 2,
            description: 'Vote for great ideas in Skedulo Hackathon 2022',
            status: 'To Do'
        },
        {
            id: 3,
            description: 'Complete tasks before Hackathon',
            status: 'In Progress'
        },
    ]
    const [jobs, setJobs] = useState(defaultJobs)

  return (
    <div className="jobs-table-container">
        <Table bordered>
            <thead>
                <tr>
                <th>
                    #
                </th>
                <th>
                    Job Description
                </th>
                <th>
                    Status
                </th>
                </tr>
            </thead>
            <tbody>
                {jobs.map(job => {
                    return (
                        <tr>
                            <th scope="row">
                                {job.id}
                            </th>
                            <td>
                                {job.description}
                            </td>
                            <td>
                                {job.status}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>
  );
}

export default JobsTable;
