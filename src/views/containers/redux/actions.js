import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './constants';

export const AddTask = (id, task, isCompleted) => {
    return {
        type: ADD_TASK,
        id,
        task,
        isCompleted
    }
};

export const EditTask = (id) => {
    return {
        type: EDIT_TASK,
        id
    }
};

export const DeleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id
    }
};

