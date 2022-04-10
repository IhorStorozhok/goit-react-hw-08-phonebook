import React from "react";
import st from "./SignUpWindow.module.css";
import s from "../ContactInput/ContactInput.module.css"
import { useAddUserMutation } from "redux/authApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUpWindow = () => {

  
  const [name, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const [confrimPassword, setConfrimPassword] = useState('');
  const [userAdd] = useAddUserMutation();
  let navigate = useNavigate();

  
 
  


  const handleSaveUser = (evt) => {
    evt.preventDefault();
    if (password === confrimPassword) {

      

      userAdd({ name, email, password })
      
      setUserName("");
      setUserEmail("");
      setUserPassword("");
      setConfrimPassword("");
      navigate(`/login`)
      
    } else {
      alert("Please enter the same passwords");
      setUserPassword("");
      setConfrimPassword("")}

  }
  
  




    return (
      <div className={st.container}>
        <form
          className={st.form} name="signup"
          onSubmit={handleSaveUser}
         
        >
        
          <h3 className={st.formTitle}>Please sign up</h3>
          <label className={s.inputLabel}>
            Name
            <input
              className={s.contactInput}
              type="name"
              autoComplete="off"
              name="name"
              value={name}
              onChange={(e) => { setUserName(e.currentTarget.value) }}
            
            />
          </label>
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
              onChange={(e) => { setUserEmail(e.currentTarget.value) }}
            />
          </label>

          <label className={s.inputLabel}>
            Password
            <input
              type="password"
              className={s.contactInput}
              name="password"
              autoComplete="off"
             
              value={password}
              onChange={(e) => { setUserPassword(e.currentTarget.value) }}
              required
            />
          </label>
          <label className={s.inputLabel}>
            Confrim Password
            <input
              type="password"
              className={s.contactInput}
              name="confrimPassword"
              autoComplete="off"
              onChange={(e) => { setConfrimPassword(e.currentTarget.value) }}
              value={confrimPassword}
              required
            />
          </label>
          <button type="submit" className={st.inputButton}
          >
            SignUp
          </button>
        
        </form></div>)
  }

        export default SignUpWindow