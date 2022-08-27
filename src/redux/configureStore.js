import { combineReducers, createStore } from "redux";
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            leaders: Leaders,
            comments: Comments,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}
