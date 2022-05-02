// import {legacy_createStore as createStore,combineReducers, applyMiddleware} from "redux"
// //import {counterReducer} from "../redux/Counter/reducer"
// //import {todosReducer} from "../redux/Todos/reducer"
// import thunk from "redux-thunk"
// const rootReducer=combineReducers({
//     // counter:counterReducer,
//     // todos:todosReducer
// })

// export const store =createStore( 
//    // rootReducer,
//     applyMiddleware(thunk)
// )
import { reducer } from "./reducer";
import { legacy_createStore } from "redux";

export const store = legacy_createStore(reducer);