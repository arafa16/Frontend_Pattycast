import React,{useState, useEffect} from 'react'
import Data from './attribute/data'
import axios from 'axios';

const AnnaliticAccount = () => {
    const [annaliticAccounts, setAnnaliticAccounts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('');
    const [allData, setAllData] = useState(0);
    const [allPage, setAllPage] = useState(0);

    useEffect(()=>{
        getAnnaliticAccounts();
    },[limit, page, status]);

    const getAnnaliticAccounts = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/annaliticAccount/"+limit+'&'+page+'&'+status);
        setAnnaliticAccounts(response.data);
        countPage(response.data.count);
        setAllData(response.data.count);
    }

    //hitung total page
    const countPage = (jmlData) => {
        const total = jmlData/limit;
        setAllPage(Math.ceil(total));
    }

    const nextPage = () => {
        const count = page + 1;
        if(count <= allPage){
            setPage(count);
        }
    }
    
    const prevPage = () => {
        const count = page - 1;
        if(count > 0){
            setPage(count);
        }
    }

    const clickStatus = (code) => {
        setStatus(code)
    }

  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <Data 
                annaliticAccounts={annaliticAccounts}
                status={status}
                clickStatus={clickStatus}
                allData={allData}
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    </div>
  )
}

export default AnnaliticAccount