import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greeting_reducer';

const middleware = applyMiddleware(thunk, logger);
const store = configureStore({
  reducer: {
    greetings: greetingReducer
  },
}, middleware);

export default store;