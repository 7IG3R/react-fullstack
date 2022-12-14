import * as ActionTypes from './ActionTypes';

export const Feedback = (state = {
    errMess : null,
    feedback : []
    }, action) => {
    switch(action.type){
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload; 
            return {...state, feedback: state.feedback.concat(feedback)};

        default:
            return state;
    }
}

export const InitialFeedback = {
    errMess : null,
    feedback : [{
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contactType: 'Tel.',
        message: ''
    }]
};