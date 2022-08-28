import { baseUrl } from '../shared/baseUrl';
import * as ActionTypes from './ActionTypes';

// Comments
export const addComment = (comment ) => ({
    type : ActionTypes.ADD_COMMENT,
    payload : comment
});
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json '
        },
        credential: 'same-origin'
    })
            .then( response => { 
                if ( response.ok ) {
                    // If response is in valid codes then return response for next
                    return response;
                } else {
                    var error = new Error('Error' + response.status + ' : ' + response.statusText);
                    error.response = response;
                    // Throw this error and catch it 
                    throw error;
                }
            }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
            .then(response => response.json())
            .then(response => dispatch(addComment(response)))
            .catch( error => {
                console.log('Post Comment Error : ' + error.message);
                alert('Comment not posted\n' + 'Error: ' + error.message);
            })
}
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
            .then( response => { 
                if ( response.ok ) {
                    // If response is in valid codes then return response for next
                    return response;
                } else {
                    var error = new Error('Error' + response.status + ' : ' + response.statusText);
                    error.response = response;
                    // Throw this error and catch it 
                    throw error;
                }
            }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message)))
}
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

// Dishes
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes')
            // Fetch Error Handling
            .then( response => { 
                if ( response.ok ) {
                    // If response is in valid codes then return response for next
                    return response;
                } else {
                    var error = new Error('Error' + response.status + ' : ' + response.statusText);
                    error.response = response;
                    // Throw this error and catch it 
                    throw error;
                }
            }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)))
}
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


// Promotions
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
            .then( response => { 
                if ( response.ok ) {
                    // If response is in valid codes then return response for next
                    return response;
                } else {
                    var error = new Error('Error' + response.status + ' : ' + response.statusText);
                    error.response = response;
                    // Throw this error and catch it 
                    throw error;
                }
            }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
            .then(response => response.json())
            .then(promos => dispatch(addPromos(promos)))
            .catch(error => dispatch(promosFailed(error.message)))
}
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});
export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});


// Leaders Section
export const fetchLeaders = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'leaders')
            // Fetch Error Handling
            .then( response => { 
                if ( response.ok ) {
                    // If response is in valid codes then return response for next
                    return response;
                } else {
                    var error = new Error('Error' + response.status + ' : ' + response.statusText);
                    error.response = response;
                    // Throw this error and catch it 
                    throw error;
                }
            }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
            .then(response => response.json())
            .then(dishes => dispatch(addLeaders(dishes)))
            .catch(error => dispatch(leadersFailed(error.message)))
}
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});
export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});
export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});


//For Contact Form
export const addFeedback = (feedback ) => ({
    type : ActionTypes.ADD_FEEDBACK,
    payload : feedback
});
export const postFeedback = (firstname, lastname, telnum, email, agree = false, contactType = 'Tel.', message) => (dispatch) => {
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    };
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback',{
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json '
        },
        credential: 'same-origin'
            })
            .then( response => { 
                if ( response.ok ) {
                    // If response is in valid codes then return response for next
                    return response;
                } else {
                    var error = new Error('Error' + response.status + ' : ' + response.statusText);
                    error.response = response;
                    // Throw this error and catch it 
                    throw error;
                }
            }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
            .then(response => response.json())
            .then(response => dispatch(addFeedback(response)))
            .catch( error => {
                console.log('Post Comment Error : ' + error.message);
                alert('Comment not posted\n' + 'Error: ' + error.message);
            })
}