import React, { useEffect, useState } from 'react'
import TableUser from './attribute/TableUser'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, resetDataUsers } from '../../stores/features/userSlice';
import { useNavigate } from 'react-router-dom';

const DataUser = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('');
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [allData, setAllData] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {dataUsers, isDataUsersSuccess, isDataUsersError, isDataUsersLoading, messageDataUsers} = useSelector((state) => state.usersReducer);

  useEffect(()=>{
    getDataUsers();
  },[limit, page, status])

  useEffect(()=>{
    if(isDataUsersSuccess){
      setUsers(dataUsers && dataUsers.rows);
      countPage(dataUsers && dataUsers.count);
      setAllData(dataUsers && dataUsers.count);
      dispatch(resetDataUsers());
    }
    
  },[isDataUsersSuccess])

  const getDataUsers = async() => {
    dispatch(getUsers({
      limit,
      page,
      status
    }));
  }

  //hitung total page
  const countPage = (jmlData) => {
    const total = jmlData/limit;
    setAllPage(Math.ceil(total));
  }

  const changeStatus = (action) => {
    setStatus(action)
    setPage(1);
  }

  const nextPage = () => {
    const count = page + 1;
    if(count <= allPage){
      setPage(count);
    }
    console.log(count, 'prev');

  }

  const prevPage = () => {
    const count = page - 1;
    if(count > 0){
      setPage(count);
    }
    console.log(count, 'prev');
  }


  return (
    <div>
        <TableUser 
            users={users}
            limit={limit}
            page={page}
            allPage={allPage}
            status={status}
            changeStatus={changeStatus}
            nextPage={nextPage}
            prevPage={prevPage}
            allData={allData}
        />
    </div>
  )
}

export default DataUser