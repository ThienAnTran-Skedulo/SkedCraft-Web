// ACTIONS
export const createJob = (job) => {
    return {
      type: "CREATE_JOB",
      payload: job,
    };
};

export const updateJob = (jobs) => {
    return {
        type: "UPDATE_JOB",
        payload: jobs,
    };
};