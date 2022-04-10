import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({name:`auth`,
    initialState: {
        user: { name: null, email: null },
        token: null,
        },
    reducers: {
        addUser: (state, action) => {
            state.user.name = action.payload.userName;
            state.user.email = action.payload.userEmail;
            state.token = action.payload.token;
            state.isLogin = !!action.payload.token;
        }
    }
})


const isLoginSwitcherSlice = createSlice({
    name: 'isLoginSwitcher',
    initialState: '',
    reducers: {
        isLoginSwitcher: (state,action) => {return  state = action.payload
                       

        }
    }
})


const loginSlice = createSlice({name:`login`,
    initialState: { user: {
            name: '',
            email: ''
          },
          token: ''
        },
        
        
    reducers: {
        loginUser: (state, action) => {
            state.user.name = action.payload.user.name;
            state.user.email = action.payload.user.email;
            state.token = action.payload.token;
         
           
        },
        getCurrentUser:(state, action) => {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
           
            
           
        },
    }
})







export const { addUser } = authSlice.actions
export const {loginUser,getCurrentUser} = loginSlice.actions
export const { isLoginSwitcher } = isLoginSwitcherSlice.actions
export {isLoginSwitcherSlice,loginSlice}