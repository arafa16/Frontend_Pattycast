import React, {useEffect, useState} from "react";
import _ from "lodash";
import Data from "./attribute/data";
import Informasi from "./attribute/informasi";
import axios from "axios";

function Main() {
  const [pengajuans, setPengajuan] = useState([]);

  useEffect(()=>{
    getPengajuan();
  },[]);

  const getPengajuan = async() => {
    const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/pengajuans");
    setPengajuan(response.data);
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-9">
        <Informasi />
        <Data dataPengajuans={pengajuans} />
      </div>
    </div>
  );
}

export default Main;
