import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import CostomHeader from './component/header-2/CostomHeader';
import { useState } from 'react';




function App() {
const [clickNavbarData,setClickNavbarData] = useState("")
  function  data(data:any){
    setClickNavbarData(data)
    }
  return (

    <div   className={`main ${ clickNavbarData ? "scroll" : ""}`}>
      <CostomHeader data = {data} />
      {/* <Header/> */}
      
      
    </div>
  );
}

export default App;
