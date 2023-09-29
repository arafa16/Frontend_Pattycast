import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMe, LogOut, reset} from "../../stores/features/authSlice";
import {useNavigate, redirect} from 'react-router-dom';

import Lucide from "../../base-components/Lucide";
import Breadcrumb from "../../base-components/Breadcrumb";
import { Menu } from "../../base-components/Headless";
import fakerData from "../../utils/faker";
import imageUser from '../../assets/images/user.png';
import _ from "lodash";
import ResetPassword from "../../pages/Users/attribute/ResetPassword";

function Main(props: { toggleMobileMenu: (event: React.MouseEvent) => void }) {
  const [viewModal, setViewModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {users, isError} = useSelector((state) => state.auth);
  

  useEffect(() => {
      dispatch(getMe());

  },[]);

  useEffect(() => {
    // setInterval(()=>{
      dispatch(getMe());
      // console.log(isError, 'users');
    // },5000)
  },[isError]);

  useEffect(() => {
    if (isError) {
      navigate("/login", { replace: true });
    }
  }, [isError]);

  const getLogOut = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate('/login');
  }


  // Show search result modal
  const showSearchResultModal = () => {
    setSearchResultModal(true);
  };

  // On press event (Ctrl+k)
  document.querySelectorAll("body")[0].onkeydown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.which == 75) {
      setSearchResultModal(true);
    }
  };

  return (
    <>
      {/* BEGIN: Top Bar */}
      <div className="h-[63px] z-[51] flex items-center relative xl:px-5">
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb light className="hidden -intro-x xl:flex">
          <Breadcrumb.Link to="/">App</Breadcrumb.Link>
          <Breadcrumb.Link to="/" active={true}>
            Dashboard
          </Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
        {/* BEGIN: Mobile Menu */}
        <div className="mr-3 -intro-x xl:hidden sm:mr-6">
          <div
            className="cursor-pointer w-[38px] h-[38px] rounded-full border border-white/20 flex items-center justify-center"
            onClick={props.toggleMobileMenu}
          >
            <Lucide
              icon="BarChart2"
              className="w-5 h-5 text-white transform rotate-90 dark:text-slate-500"
            />
          </div>
        </div>
        {/* END: Mobile Menu */}
        {/* BEGIN: Search */}
        <div className="relative ml-auto intro-x sm:mx-auto">
        </div>
        {/* END: Search */}
        
        {/* BEGIN: Account Menu */}
        <Menu className="h-10 intro-x">
          <Menu.Button className="flex items-center h-full dropdown-toggle">
            <div className="w-10 h-10 image-fit">
              <img
                alt="Rocketman - HTML Admin Template"
                className="border-2 border-white rounded-full shadow-lg border-opacity-10"
                src={imageUser}
              />
            </div>
            <div className="hidden ml-3 md:block text-slate-200">
              <div className="max-w-[7rem] truncate font-medium">
                {users && users.name}
              </div>
              <div className="text-xs text-slate-400">
                {users && users.email}
              </div>
            </div>
          </Menu.Button>
          <Menu.Items className="w-56 mt-px">
            <Menu.Item
              onClick={()=>setViewModal(true)}
            >
              <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={()=>getLogOut()}>
              <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" /> Logout
            </Menu.Item>
          </Menu.Items>
        </Menu>
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
      <ResetPassword 
          viewModal={viewModal} 
          setViewModal={setViewModal}
          id={users && users.uuid}
      />
    </>
  );
}

export default Main;
