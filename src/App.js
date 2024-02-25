import './App.css';
import NavBar from './components/NavBar';
import DatePicker from './components/DatePicker';
import Dropdown from './components/Dropdown';
import Submit from './components/Submit';
import React, { useState } from 'react';


const App = () => {
  const [selectedOptionOutside, setSelectedOptionOutside] = useState('');
  const [tableData, setTableData] = useState([]);

  let payloadData = {
    appNamePD:"",
    moduleNamePD:"",
    datePD:"",
    hourPD:""
  };

  return (
    <div>
      <NavBar />

      <div className="d-flex justify-content-center bd-highlight mb-3 mt-5">
        <div className="h4 p-2 bd-highlight"><b>Application:</b></div>
        <div className="p-2 bd-highlight">
          <Dropdown
            id="appDropdown"
            options={['WIBAC', 'WIBSV']}
            payloadData = {payloadData}
          />
        </div>
        <div className="h4 p-2 bd-highlight"><b>Module:</b></div>
        <div className="p-2 bd-highlight">
          <Dropdown
            id="projectDropdown"
            options={['Card Management']}
            payloadData = {payloadData}
          />
        </div>
      </div>

      <DatePicker payloadData={payloadData}/>
      <Submit payloadData={payloadData}/>

    </div>
  );
};

export default App;
