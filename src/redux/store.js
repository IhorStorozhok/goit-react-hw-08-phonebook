import { configureStore } from "@reduxjs/toolkit";

import { filterSlice } from "./slices/contactsContacts";
import { contacsFromDbApi } from "./contacsApi";

export const store = configureStore({
    reducer: {
        [contacsFromDbApi.reducerPath]: contacsFromDbApi.reducer,
        filter: filterSlice.reducer
    },
    middleware: (getDefaultMiddleware)=>[...getDefaultMiddleware(),contacsFromDbApi.middleware]
})


