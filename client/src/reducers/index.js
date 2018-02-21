import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import moviesReduser from './moviesReduser';

export default combineReducers({
	form: reduxForm,
	movies: moviesReduser
});
