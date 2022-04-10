import { configureStore } from "@reduxjs/toolkit";

import { filterSlice } from "./slices/contactsContacts";
import { isLoginSwitcherSlice, loginSlice } from "./slices/authSlice";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';





import { contacsFromDbApi } from "./contacsApi";
import { authApi } from "./authApi";

const persistConfig = {
  key: 'currentUser',
    storage,
  whitelist:['token']
}
 


export const store = configureStore({
    reducer: {
        [contacsFromDbApi.reducerPath]: contacsFromDbApi.reducer,
        filter: filterSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        currentUser:persistReducer(persistConfig,loginSlice.reducer),
            
        isLogin:isLoginSwitcherSlice.reducer,

       
    },
    middleware: (getDefaultMiddleware)=>[...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),contacsFromDbApi.middleware,authApi.middleware]
})

export const persistor=persistStore(store)




