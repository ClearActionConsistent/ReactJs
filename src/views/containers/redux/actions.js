import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './constants';

export const onAddTask = (id, textInput, isCompleted) => {
    return {
        type: ADD_TASK,
        id,
        textInput,
        isCompleted
    }
};

export const onEditTask = (id) => {
    return {
        type: EDIT_TASK,
        id
    }
};

export const onDeleteTask = (id) => {
    console.log("id: ", id);
    return {
        type: DELETE_TASK,
        id
    }
};

