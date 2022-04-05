import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const contacsFromDbApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62497427831c69c687cded81.mockapi.io' }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({ query: () => `/contacts` ,providesTags:['Contacts']}),
        deleteContact: builder.mutation({
            query: contactId => ({ url: `/contacts/${contactId}`, method: 'DELETE' }),
            invalidatesTags: ['Contacts']
        }),
        addContact:builder.mutation({ query: newContact => ({ url: `/contacts`, method: 'POST',body:newContact }),
            invalidatesTags: ['Contacts']})
    })
})

export const{useGetContactsQuery,useDeleteContactMutation,useAddContactMutation}=contacsFromDbApi
