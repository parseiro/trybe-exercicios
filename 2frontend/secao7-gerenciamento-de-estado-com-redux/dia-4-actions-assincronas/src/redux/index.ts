import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {dogReducer} from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(dogReducer, composeWithDevTools(applyMiddleware(thunk)));
