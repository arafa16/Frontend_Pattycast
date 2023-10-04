import React, {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, Link, useParams} from 'react-router-dom';
import {RegisterUser, reset} from "../../stores/features/authSlice";

import LoadingIcon from "../../base-components/LoadingIcon";
import Notification from "../../base-components/Notification";
import { NotificationElement } from "../../base-components/Notification";

import logoUrl from "../../assets/images/logo.png";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput, FormCheck } from "../../base-components/Form";
import axios from "axios";

function Main() {
  const {token} = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  // Basic non sticky notification
  const basicNonStickyNotification = useRef<NotificationElement>();

  useEffect(()=>{
    takeToken();
  },[]);

  const takeToken = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/reset/${token}`);
      console.log(response);
      setEmail(response.data.email)
    } catch (error : any) {
      console.log(error.response.data.msg.name);
      setMsg(error.response.data.msg.name)
      basicNonStickyNotification.current?.showToast();
    }
  }

  const resetPassword = async(e : any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/reset/${token}`,{
        password:password,
        confPassword:confPassword
      });
      console.log(response);
      setMsg(response.data.msg)
      basicNonStickyNotification.current?.showToast();
    } catch (error) {
      console.log(error);
      // setMsg(error.response.data.msg.name)
      basicNonStickyNotification.current?.showToast();
    }

  }


  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
          <div className="w-96 intro-y">
            {/* BEGIN: Basic Non Sticky Notification Content */}
            <Notification
              getRef={(el) => {
                basicNonStickyNotification.current = el;
              }}
              options={{
                duration: 3000,
              }}
              className="flex flex-col sm:flex-row"
            >
              <div className="font-medium capitalize">
                {msg}
              </div>
            </Notification>
            {/* END: Basic Non Sticky Notification Content */}
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
              <img
                className="w-16 mx-auto mb-4 "
                alt="Rocketman - Tailwind HTML Admin Template"
                src={logoUrl}
              />
              <form onSubmit={resetPassword}>
                <FormInput
                  type="text"
                  className="block px-4 py-3 mt-4"
                  placeholder=""
                  disabled
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <FormInput
                  type="password"
                  className="block px-4 py-3 mt-4"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <FormInput
                  type="password"
                  className="block px-4 py-3 mt-4"
                  placeholder="Confirmation Password"
                  value={confPassword}
                  onChange={(e)=>setConfPassword(e.target.value)}
                />
                <div className="mt-5 text-center xl:mt-8 xl:text-left">
                  <Button type="submit" variant="primary" className="w-full xl:mr-3">
                    {/* {isLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-5 h-5" /> : 'Register'} */}
                    Reset Password
                  </Button>
                </div>
                <div className="flex justify-between mt-4 px-2 text-xs text-slate-500 sm:text-sm">
                  <Link to={'/login'}>Back To Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
