import { createForms } from "react-redux-form";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Comments } from './comments';
import { Dishes } from './dishes';
import { InitialFeedback } from "./forms";
import { Leaders } from './leaders';
import { Promotions } from './promotions';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            leaders: Leaders,
            comments: Comments,
            promotions: Promotions,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger) //add logger for logging 
    );
    return store;
}
