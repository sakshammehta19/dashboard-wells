import './App.css';
import NavBar from './components/NavBar';
import DatePicker from './components/DatePicker';
import Dropdown from './components/Dropdown';
import Table from './components/Table';
import React, { useState } from 'react';




const App = () => {
  const [selectedOptionOutside, setSelectedOptionOutside] = useState('');


  return (
    <div>
      <NavBar />

      <div class="d-flex justify-content-center bd-highlight mb-3 mt-5">
        <div class="p-2 bd-highlight">Select Project:</div>
        <div class="p-2 bd-highlight">
          <Dropdown
            options={['WIBAC', 'WIBSV']}
          />
        </div>
        <div class="p-2 bd-highlight">Use Case:</div>
        <div class="p-2 bd-highlight">
          <Dropdown
            options={['Card Management']}
          />
        </div>
      </div>

      {/* <div class="d-flex justify-content-center bd-highlight mb-3">
        <div class="p-2 bd-highlight">Use Case:</div>
        <div class="p-2 bd-highlight">
          <Dropdown
            options={['WIBAC', 'WIBSV']}
          />
        </div>
      </div> */}

      <DatePicker />

      <Table />

    </div>
  );
};

export default App;
