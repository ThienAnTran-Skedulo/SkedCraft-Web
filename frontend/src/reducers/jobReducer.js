// REDUCER
const defaultState = [
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


export const jobReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CREATE_JOB":
            return [...state, action.payload]
        case "UPDATE_JOB":
            return action.payload;
        default:
            return state;
    }
};


export default jobReducer;