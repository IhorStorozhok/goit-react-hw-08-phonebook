import React from "react";
import s from "./UserBar.module.css"
import { useDispatch,useSelector } from "react-redux";
import { loginUser, isLoginSwitcher } from "redux/slices/authSlice";
import { useLogOutUserMutation } from "redux/authApi"; 
import { useEffect } from "react";


const UserBar = ({ userName }) => {
 
    const dispatch = useDispatch();
    const [logOutUser, data] = useLogOutUserMutation();
    const token = useSelector(state=>{return state.currentUser.token})

    const handleLogOutUser = () => {
  
    logOutUser({ token });
    
  }

  useEffect(() => {
    if (data.isSuccess) {
        
      
        dispatch(loginUser({
            user: {
                name: '',
                email: ''
            },
            token: ''
        }))
      dispatch(isLoginSwitcher(false));
    }
  },[data.isSuccess])


    return (<div className={s.elementsBox}><p className={s.button}>{`Hi, ${userName}`}</p>
        <p className={s.button}
        onClick={()=>{handleLogOutUser()}}>LogOut</p></div>)
}
export default UserBar