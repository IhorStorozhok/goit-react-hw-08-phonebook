import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com/', prepareHeaders: (headers, { getState }) => {
        const token = getState().currentUser.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  } }),
    tagTypes: ['user'],
    endpoints: build => ({
        addUser: build.mutation({
            query: (body) => ({
                url: 'users/signup',
                method: 'POST',
                body
            }),
            invalidatesTags:['user']
        }),
        getUser:build.mutation({query:(body)=>({url: 'users/login',
                method: 'POST',
            body
        })
        }),
        logOutUser:build.mutation({query:(token)=>({url: 'users/logout',
                method: 'POST',
            token
        })
        }),
        getCurrentUser:build.mutation({query:()=>({url: '/users/current',
                method: 'GET',
            
        })
        })

    })
})

export const{useAddUserMutation,useGetUserMutation,useLogOutUserMutation,useGetCurrentUserMutation}=authApi





 