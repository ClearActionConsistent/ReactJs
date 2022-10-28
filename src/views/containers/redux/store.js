import { legacy_createStore as createStore } from "redux";
import Reducers from "./reducers";

const store = createStore(Reducers);

export default store