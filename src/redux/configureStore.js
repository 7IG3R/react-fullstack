import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const configureStore = () => {
    const store = createStore(
        Reducer, //Reducer Function/Pure function which take current state and action and return new state.
        initialState // Initial State to start the system.
    );
    return store;
}