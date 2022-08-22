
import { COMMENTS } from '../shared/comments';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

// Initial State/First state
export const initialState = {
    dishes : DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
}

// Pure function which just take current state and an action and return new state.
export const Reducer = (state = initialState, action) => {
    return state;
}