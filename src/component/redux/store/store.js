import { createStore } from "redux";
import { BooksReducer } from "../reducer/BooksReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
export const store = createStore(BooksReducer, applyMiddleware(thunk))