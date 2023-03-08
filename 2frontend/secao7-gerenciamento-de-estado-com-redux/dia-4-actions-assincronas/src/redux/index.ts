import {legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {dogReducer} from "./reducers";

export const store = createStore(dogReducer, composeWithDevTools());
