import React, { useState } from 'react'
import Table from './Table';

export default function DatePicker() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const [tableData, setTableData] = useState([]);

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleStartTimeChange = (e) => {
        setStartTime(e.target.value);
    };

    const handleEndTimeChange = (e) => {
        setEndTime(e.target.value);
    };


    const handleSubmit = () => {
        // Here, you can implement logic to fetch and display data based on the date range.
        // For simplicity, let's just create a sample data array.
        const sampleData = [
            { date: '2024-02-01', value: 100 },
            { date: '2024-02-02', value: 150 },
            { date: '2024-02-03', value: 120 },
        ];

        setTableData(sampleData);


    };

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <p className="text-center mb-3" >Enter Date Range:</p>
                        <div className="d-flex justify-content-center bd-highlight mb-3">
                            <label className="mx-2" htmlFor="startDate"  >Start Date:</label>
                            <input
                                type="date"
                                id="startDate"
                                className="form-control mx-1"
                                value={startDate}
                                onChange={handleStartDateChange}
                            />
                            <input
                                type="time"
                                id="startTime"
                                className="form-control mx-1"
                                value={startTime}
                                onChange={handleStartTimeChange}
                            />
                        </div>
                        <div className="d-flex justify-content-center bd-highlight mb-3" >
                            <label className="mx-2" htmlFor="endDate" >End Date:</label>
                            <input
                                type="date"
                                id="endDate"
                                className="form-control mx-1"
                                value={endDate}
                                onChange={handleEndDateChange}
                            />
                            <input
                                type="time"
                                id="endTime"
                                className="form-control mx-1"
                                value={endTime}
                                onChange={handleEndTimeChange}
                            />
                            <br />
                        </div>
                        <button
                            className="btn btn-primary btn-block mt-10"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>

                    </div>



                    {tableData.length > 0 && (
                        <table className="table mt-4">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    )
}
