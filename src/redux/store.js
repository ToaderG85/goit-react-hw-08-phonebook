import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { contactsFilterReducer } from './contactsFilterSlice';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: contactsFilterReducer,
    user: userReducer,    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }), 
});



