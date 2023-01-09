import { createStore } from "redux";
import { countReducer } from "./Reducer/counterReducer";

const store = createStore(countReducer);
export default store;
