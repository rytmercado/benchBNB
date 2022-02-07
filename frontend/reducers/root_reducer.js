import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from './ui_reducer'

export default combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  session: sessionReducer,
  errors: errorsReducer,
});
