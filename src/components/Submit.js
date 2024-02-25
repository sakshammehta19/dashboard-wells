import React, { useState } from 'react';
import Table from './Table';

export default function Submit({ payloadData }) {
    const [clicked, setClicked] = useState(false);

    const handleSubmit = () => {
        console.log(payloadData);
        console.log("Submit button is clicked.");
        setClicked(true);
    };

    return (
        <div className="d-block">
            <div className="mx-auto" style={{ "width": "100px" }} onClick={handleSubmit}>
                <button className='btn btn-primary mt-2'>
                    Submit
                </button>
            </div>
            {
                !clicked && (
                    <table className="mt-4 container table table-bordered">
                        <thead>
                            <tr className="table-danger">
                                <th>Pattern</th>
                                <th>DeviceType</th>
                                <th>DeviceExperience</th>
                                <th>Native_UI</th>
                                <th>Weekday</th>
                                <th>Month</th>
                                <th>Date</th>
                                <th>Hour</th>
                                <th>ActualFrequency</th>
                                <th>PredictedFrequency</th>
                                <th>Category</th>

                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr>
                                <td >No data to display</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
            {
                clicked && (
                    <Table payloadData={payloadData} />
                )
            }
        </div>
    )
}
