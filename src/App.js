import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";




import "./App.css";
import ContactInput from "./components/ContactInput/ContactInput";
import ContactList from "./components/ContactList/ContactsList";
import AppBar from "components/AppBar/AppBar";
import Header from "components/Header/Header";
import StartingPage from "components/StartingPage/StartingPage";
import LoginWindow from "components/LoginWindow/LoginWindow";
import ContentContainer from "components/ContentContainer/ContentContainer";
import UserBar from "components/UserBar/UserBar";
import { useSelector } from "react-redux";
import { useGetCurrentUserMutation } from "redux/authApi";
import { getCurrentUser } from "redux/slices/authSlice";
import { isLoginSwitcher } from "redux/slices/authSlice";




import SignUpWindow from "components/SignUpWindow/SignUpWindow";




const Phonebook = () => {
  const loginStatus = useSelector(state => state.isLogin);
  const currentUserName = useSelector(state => state.currentUser.user);

  const token = useSelector(state => state.currentUser.token);
  const dispatch = useDispatch();
  

  const [getUser, data,] = useGetCurrentUserMutation();
  useEffect(() => {
    if (token) {
      getUser(token).then(resp => dispatch(getCurrentUser(resp.data))
      );
      dispatch(isLoginSwitcher(true));
    }
  }, [])
   
  
  
  


  

  const mainAppBarContent = loginStatus ? ['Contacts'] : ['Phonebook', 'Contacts'];


  return (
    <>
      
      <Header ><AppBar elements={mainAppBarContent} />
      
        {!loginStatus?<AppBar elements={['Login', 'Sign Up']} />:(currentUserName.name||data.isSuccess)&&<UserBar userName={currentUserName.name} />}</Header>
      <Routes>
        <Route path="/" element={!loginStatus?<StartingPage />:<Navigate replace to="/contacts" />}></Route>
        {
          <Route path="login" element={!loginStatus?<LoginWindow />:<Navigate replace to="/contacts" />}></Route>}
        <Route path="signup" element={!loginStatus?<SignUpWindow/>:<Navigate replace to="/contacts" />}></Route>
        <Route path="/contacts" element={loginStatus ?
          <ContentContainer >
          <ContactInput />
        
          <ContactList />
          
            </ContentContainer> : <Navigate replace to="/login" />}>
          
        </Route>
        </Routes>
    </>
  );
}
;



export default Phonebook;
