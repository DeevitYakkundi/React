import React,  { useState, useEffect }  from "react";
import "../components/TableStyle.css"
import Papa from 'papaparse';

  
function TableComponent({ csvFilePath }){

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(csvFilePath);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csvString = decoder.decode(result.value);
      
      // Parse CSV data using Papa Parse
      const parsedData = Papa.parse(csvString, { header: true }).data;
      setData(parsedData);
    };

    fetchData();
  }, [csvFilePath]);


    return(
    <div>
        <div>
            To display a CSV file in a table format in react we need a library  Papa Parse library to parse the CSV data   <br/>
            <code><b>npm install papaparse</b></code> 
        </div>
        <div>
        <h2>CSV File Data</h2>
            <table className="custom-table">
                {/* <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>w3iej</td>
                    <td>Raj</td>
                    <td>Pen</td>
                    <td>2</td>
                </tr> */}
                <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, columnIndex) => (
                <td key={columnIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
            </table>
        </div>
    </div>
    );
}

export default TableComponent;
