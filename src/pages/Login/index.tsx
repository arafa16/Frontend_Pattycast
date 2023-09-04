import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LoginUser, reset, getMe} from "../../stores/features/authSlice";
import {useNavigate, Link} from 'react-router-dom';

import LoadingIcon from "../../base-components/LoadingIcon";

import logoUrl from "../../assets/images/logo.png";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput, FormCheck } from "../../base-components/Form";

function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isError, isSuccess, isLoading, message} = useSelector(
      (state) => state.auth
  );

  useEffect(()=>{
    if(isSuccess){
        navigate("/dashboard")
    }
    dispatch(reset());
  },[user, isSuccess, dispatch, navigate]);


  const Auth = (e) => {
      e.preventDefault();
      dispatch(LoginUser({email, password}));
      // dispatch(getMe());
  }

  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
          <div className="w-96 intro-y">
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
            <img
              className="w-16 mx-auto mb-4"
              alt="Rocketman - Tailwind HTML Admin Template"
              src={logoUrl}
            />
            <form onSubmit={Auth}>
              <FormInput
                type="text"
                className="block px-4 py-3"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <FormInput
                type="password"
                className="block px-4 py-3 mt-5"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <div className="mt-5 text-center xl:mt-8 xl:text-left">
                <Button type="submit" variant="primary" className="w-full xl:mr-3">
                  {isLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-5 h-5" /> : 'Login'}
                </Button>
              </div>
              <div className="flex justify-between mt-4 px-2 text-xs text-slate-500 sm:text-sm">
                <Link to={'/forgotPassword'}>*</Link>
                <Link to={'/register'}>Register</Link>
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
