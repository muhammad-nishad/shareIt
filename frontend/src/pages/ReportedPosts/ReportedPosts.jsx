import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Datatable from "react-data-table-component"

export default function ReportedPosts() {
  const [report,setReport]=useState([])

  const reportedPosts=()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/authorizer/reportedPosts`).then((response)=>{
      setReport(response.data)
      console.log(response.data,'response');
    })
    console.log(report,'report');
    
  }
  useEffect(()=>{
    reportedPosts()

  },[])

  const columns=[
    {
      name:"First name",
      selector:(report)=>report?.userid.first_name,
      sortable: true
    },{
      name: "Last name",
      selector: (report) => report?.userid.last_name,
      sortable: true

    },{

    
    name:"Reported Post",
    selector:(report)=> <img width={100} height={50} src={report?.img}/>,
    sortable:true
  },
  {

    
    name:"Reported By",
    selector:(report)=> report?.report.reportedBy,
    sortable:true
  },
  {
    name:"Action",
    cell:row=><Button> Remoove</Button>
  }
  ]

 

  
  return (
    <>
     <div className="feedMain">
        <Datatable columns={columns} data={report} />
      </div>



   {/* {
    report?.map((data)=>(
      data.userid.first_name

    ))
   } */}





    </>
  )
}
