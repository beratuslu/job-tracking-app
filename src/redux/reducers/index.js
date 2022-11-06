import { combineReducers } from "redux";
import jobList from "./jobList";
import filters from "./filters";
import modal from "./modal";

export default combineReducers({ jobList, filters, modal });
