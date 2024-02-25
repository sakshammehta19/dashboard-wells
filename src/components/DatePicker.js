import React, { useState } from 'react'

export default function DatePicker({ payloadData }) {
    const [startDate, setStartDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState('');


    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
        payloadData["datePD"] = e.target.value;
        console.log(payloadData);
    };


    const handleHourSelect = (e) => {
        setSelectedHour(e.target.value);
        payloadData["hourPD"] = e.target.value;
        console.log(payloadData);
    };


    const hours = ["12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM","9:00 AM","10:00 AM",
    "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM","5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM","11:00 PM"];


    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <p className="h4 text-center mb-3" ><b>Select Date and Time:</b></p>
                        <div className="d-flex justify-content-center bd-highlight mb-3">
                            <input
                                type="date"
                                id="startDate"
                                className="form-control mr-3"
                                value={startDate}
                                onChange={handleStartDateChange}
                            />
                            {/* <input
                                type="time"
                                id="startTime"
                                className="form-control mx-1"
                                value={startTime}
                                onChange={handleStartTimeChange}
                            /> */}
                            {/* <label htmlFor="hourPicker">Select Hour:</label>
                            <select id="hourPicker" value={selectedHour} onChange={handleHourSelect}>
                                <option value="">Select</option>
                                {hours.map(hour => (
                                    <option key={hour} value={hour}>{hour}</option>
                                ))}
                            </select> */}
                            <select className="form-select mx-2" id="startTime" value={selectedHour} onChange={handleHourSelect} aria-label="Default select example" required="">
                            <option value="">Select hour</option>
                            {hours.map(hour => (
                                    <option key={hour} value={hour}>{hour}</option>
                                ))}
                            </select>
                        </div>

                    </div>



                    
                </div>
            </div>
        </>
    )
}

