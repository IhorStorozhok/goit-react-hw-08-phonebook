import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const contacsFromDbApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com/', prepareHeaders: (headers, { getState }) => {
        const token = getState().currentUser.token
       

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  } }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
      getContacts: builder.query({ query: () => `/contacts`, method: 'GET',invalidatesTags: ['Contacts'] }),
      
        deleteContact: builder.mutation({
            query: contactId => ({ url: `/contacts/${contactId}`, method: 'DELETE' }),
            invalidatesTags: ['Contacts']
        }),
        addContact:builder.mutation({ query: newContact => ({ url: `/contacts`, method: 'POST',body:newContact }),
            invalidatesTags: ['Contacts']})
    })
})

export const{useGetContactsQuery,useDeleteContactMutation,useAddContactMutation}=contacsFromDbApi
