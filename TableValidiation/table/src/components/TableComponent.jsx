import React,  { useState, useEffect }  from "react";
import "../components/TableStyle.css";
import Papa from 'papaparse';
// import TableData from "./tabledata.csv";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
  
function TableComponent({ csvFilePath }){

  // useEffect(()=> {
  //   const fetchData = async () => {
  //     const response = await fetch(TableData);
  //     const reader = response.body.getReader();
  //     const result = await reader.read();
  //     const decoder = new TextDecoder('utf-8');
  //     const csvData = decoder.decode(result.value);
  //     const parsedData = Papa.parse(csvData, {
  //       header: true,
  //       skipEmptyLines: true
  //     }).data;
  //     setData(parsedData);

  //   };
  //   fetchData();
  // },[]);


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
            <hr />
            <ul>
                <li>This prjoect deals with handling csv file types and converting it to readable table format.</li> 
                <li>Table Validation and testing using cypress</li>
            </ul>
            <hr />
        </div>
        
        <div className="Requiremenrt">
          <i>
            To display a CSV file in a table format in react we need a library known as Papa Parse. This library to parse ( for converting a text string into a JavaScript object) the CSV data.<br/>
            <code><b>"npm install papaparse"</b></code> <br/>
          </i><hr />
        </div>

        <div className="Execution">
          <div className="UploadData">
            <u>Upload a file to see how the csv file is accessed</u>  :) <br/> <br/> 

            <input type="file" accept=".csv" onChange={handleFileUpload} /><br/> <hr />

          </div>
        
          <div className="DisplayCSV">
          <h2>CSV File Data</h2>

          {/* If file is uploaded  */}
          {/* <i>
          {data.length ? JSON.stringify(data): null}
          </i> */}
          {/* If file is direct accessed  */}
          { (data.length>0)?
          <>
            <p><i>{JSON.stringify(data)}</i><br/><br/>
            <b>Which is not in a very readable format.</b> Therefore it has to be coverted into a table. For which we need to leverage map functionality.</p>
          </>: null
          }
          <hr />
          </div>
          
          <div name="CSVTable">
            <h2>CSV Converted into Table</h2>
          
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

            <hr />
            This table is formatted using Prime React Library.<br/>
            <i>Install <code><b>npm install primereact</b></code></i><br  /> <hr />     
          </div>
        </div>
    </div>
  );
}

export default TableComponent;
