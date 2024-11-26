import { createStore } from "redux";
import { mockData } from "../mockData";
import reducers from "./reducers";

const store = createStore(reducers, mockData);

export default store;
