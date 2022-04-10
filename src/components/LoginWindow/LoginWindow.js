import React from "react";
import { Link } from "react-router-dom";
import st from "./LoginWindow.module.css";
import s from "../ContactInput/ContactInput.module.css"
import { useGetUserMutation } from "redux/authApi";
import { useState,useEffect } from "react";
import {  useDispatch } from "react-redux";
import { isLoginSwitcher,loginUser } from "redux/slices/authSlice";

const LoginWindow = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userGet, data] = useGetUserMutation();
 
  const dispatch= useDispatch()


  const handleGetUser = (evt) => {
    evt.preventDefault();
    userGet({ email, password });
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    if (data.isSuccess) {
        
      
      dispatch(loginUser(data.data))
      dispatch(isLoginSwitcher(true));
    }
  },[data.isSuccess,data.data])
  
    


  return (
    <div className={st.container }>
      <form
        className={st.form} name="login"
      onSubmit={handleGetUser}>
        <h3 className={st.formTitle}>Please login</h3>
          <label className={s.inputLabel}>
            Email
            <input
              className={s.contactInput}
              type="email"
              autoComplete="off"
              name="email"
              pattern="(?!test@test\.com$)[a-z0-9._%+-]{3,}@[a-z]{3,}\.[a-z]{2,}(?:\.[a-z]{2,})?"
              title="This is not a correct email. Please try another email. For example Adrian@gmail.com, JacobMercer@mail.com
              required"
              value={email}
              onChange={(e) => { setEmail(e.currentTarget.value) }}
            
            />
        </label>
        

          <label className={s.inputLabel}>
            Password
            <input
              type="password"
              className={s.contactInput}
              name="password"
              autoComplete="off"
         
            title="Password should be at least seven characters"
              value={password}
              onChange={(e) => { setPassword(e.currentTarget.value) }}
              required
            />
          </label> <button type="submit" className={st.inputButton}>
            LogIn
        </button>
        <Link to={'/signup'}>
        <button type="button" className={st.inputButton}>
            SignUp
          </button></Link>
        <span className={st.forget} onClick={()=>{alert("Нажаль, я поки що не знаю як відновити пароль,тому постарайтесь напружити пам’ять) ")}}> Did you foget your password?</span>
       
</form></div>)
}
        export default LoginWindow