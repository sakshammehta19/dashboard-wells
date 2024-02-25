import React, { useState, useEffect } from 'react';

function Table({payloadData}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //b39382e2a3794b4d882a0eb84aa12587
  const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b39382e2a3794b4d882a0eb84aa12587');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log(jsonData.status + jsonData.articles.length);
      setData(jsonData.articles);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <table className="container table table-bordered mt-4 mb-5">
        <thead>
          <tr className='table-danger'>
            <th>Source</th>
            <th>Author</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.map((item) => (
            <tr key={item.id}>
              <td >{item.source.name}</td>
              <td >{item.author}</td>
              <td >{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
