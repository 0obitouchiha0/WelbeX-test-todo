import {configureStore, combineReducers} from "@reduxjs/toolkit";
import tasksReducer from './reducers/tasks'

const rootReducer = combineReducers({
    tasks: tasksReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>