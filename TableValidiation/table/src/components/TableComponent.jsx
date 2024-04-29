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

import React,  { useState, useEffect }  from "react";
import "../components/TableStyle.css";
import Papa from 'papaparse';
import TableData from "./tabledata.csv";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
    
  
function TableComponent({ csvFilePath }){

  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch(TableData);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true
      }).data;
      setData(parsedData);

    };
    fetchData();
  },[]);





  const [data,setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  };

    return(
    <div>
        <div className="Introduction">
            To display a CSV file in a table format in react we need a library  Papa Parse library to parse the CSV data   <br/>
            <code><b>npm install papaparse</b></code> 
        </div>
        <div className="Problem">

          <input type="file" accept=".csv" onChange={handleFileUpload} /><br/>

          <h2>CSV File Data</h2>

          <p>Upload a file to see how the csv file is accessed, <br/></p>
          {/* {data.length ? JSON.stringify(data): null} */}

          { (data.length>0)?
          <>
            <p>{JSON.stringify(data)} <br/>
            <br/><b>Which is not in a very readable format.</b>Therefore it has to be coverted into a table. For which we need to make use of map function.</p>
          </>: null
          }


          <h2>CSV File Data Converted into a table</h2>
  
          { (data.length>0)?
          (
            <DataTable value={data}>
               
                      <Column field="Code" header="Code" />
                      <Column field="Name" header="Name" />
                      <Column field="Category" header="Category" />
                      <Column field="Quantity" header="Quantity" />

              {/* {data.map((row,index) => (
                  <tr key={index}>                          
                      <td>{row.Code}</td>
                      <td>{row.Name}</td>
                      <td>{row.Category}</td>
                      <td>{row.Quantity}</td>
                  </tr>)
                )
              }                */}

            </DataTable>
          ): null}
          This table is formatted using Prime React Library.
            Install <code><b>npm install primereact</b></code><br  />
              Then import the dependencies refering to the documentation.<br  />
                    In my case,<br /><code><b>import  DataTable  from 'primereact/datatable';<br />
                                     import  Column from 'primereact/column';<br />
                                     import "primereact/resources/themes/lara-light-indigo/theme.css";<br />
                                     import "primereact/resources/primereact.min.css";</b></code>
       
          
          
        </div>
        <div>
          
        </div>
    </div>
    );
}

export default TableComponent;
