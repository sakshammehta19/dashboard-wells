import React, { useState } from 'react'

export default function DatePicker() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [tableData, setTableData] = useState([]);

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
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
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="mb-4 text-center">Enter Date Range</h2>
                    <div className="form-group">
                        <label htmlFor="startDate" className="mr-2" >Start Date:</label>
                        <input
                            type="date"
                            id="startDate"
                            className="form-control"
                            value={startDate}
                            onChange={handleStartDateChange}
                        />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="endDate" >End Date:</label>
                        <input
                            type="date"
                            id="endDate"
                            className="form-control mb-2"
                            value={endDate}
                            onChange={handleEndDateChange}
                        />
                    </div>
                    <button
                        className="btn btn-primary btn-block mt-10"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>

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
        </div>
    )
}
