import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './user/userSlice.js'

export const store = configureStore({
  reducer: {user: userReducer},

  //creating middleware
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({serializableCheck:false}),
})