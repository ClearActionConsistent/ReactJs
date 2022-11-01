import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './constants';

const initializeState = {
    id: '',
    tasks: [],
    textInput: '',
    isCompleted: false
};

const Reducers = (state = initializeState, action) => {
    const { id, textInput, isCompleted } = action;
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [{ id, textInput, isCompleted }, ...state.tasks]
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