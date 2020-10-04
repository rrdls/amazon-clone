import * as actionCreators from "./actions";
import { rootReducer } from "./reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({
  actionCreators,
  trace: true,
  traceLimit: 25,
});

export const store = createStore(rootReducer, composeEnhancers());
