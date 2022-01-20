import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Table
} from "reactstrap";
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as JobActions from '../../actions/jobActions';
import './JobsTable.css'

function JobsTable({jobs}) {

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
                {jobs.map((job, index) => {
                    return (
                        <tr key={index}>
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

function mapStateToProps(state) {
    return {
        jobs: state.jobReducer
    };
}

export default connect(mapStateToProps)(JobsTable);
