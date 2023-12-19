import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

import thunk from 'redux-thunk'
import userReducer from './userSlice'


const store = configureStore({
    reducer:{
        user: userReducer,

    },
},applyMiddleware(thunk))

export default store;