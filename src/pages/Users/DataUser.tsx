import React, { useEffect, useState } from 'react'
import TableUser from './attribute/TableUser'
import axios from 'axios';

const DataUser = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('');
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [allData, setAllData] = useState(0);

  useEffect(()=>{
      getUsers();
  },[limit, page, status])

  const getUsers = async() => {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/users/${limit}&${page}&${status}`,{
          withCredentials: true, // Now this is was the missing piece in the client side 
        });
      
      console.log(`${import.meta.env.VITE_REACT_APP_API_URL}/users/${limit}&${page}&${status}`, status, response.data,  'status');
      setUsers(response.data);
      countPage(response.data.count);
      setAllData(response.data.count);
      // console.log(response.data, 'data users');
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
            users={users.rows}
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