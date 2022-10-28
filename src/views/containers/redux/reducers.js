import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './constants';

const initializeState = {
    id: "",
    task: [],
    isCompleted: false
};

const Reducers = (state = initializeState, action) => {
    const { id, task, isCompleted } = action;
    console.log("state: ", state);
    console.log("action: ", action);
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                id,
                task,
                isCompleted
            };
        case EDIT_TASK:
            return {
                ...state
            };
        case DELETE_TASK:
            return {
                ...state
            }
        default:
            return state;
    }
};

export default Reducers;