import { Box } from '@material-ui/core'
import React, { useState } from 'react'
import Datatable from "react-data-table-component"
import axios from "axios"
import { useEffect } from 'react'
import './AdminFeed.css'
import { Button } from '@mui/material'

export default function AdminFeed() {
  const [users, setUsers] = useState([])
  const getAllUsers = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/authorizer/getUsers`)
    setUsers(data)
  }

  const userManagement=(id)=>{
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/authorizer/userManagement`,{id}).then((response)=>{
        getAllUsers()
      })
  }

  useEffect(() => {
    getAllUsers();
  }, [])
  const columns = [
    {
      name: "First name",
      selector: (users) => users.first_name,
      sortable: true

    },
    {
      name: "Last name",
      selector: (users) => users.last_name,
      sortable: true

    },
    {
      name: "Email",
      selector: (users) => users.email,
      sortable: true

    },
    {
      name: "Active Status",
      selector: (users) =>
        <Button onClick={()=>{
          userManagement(users._id)
          
        }}>
          {users.Active ?
            "BLOCK" : "ACTIVE"
          }

        </Button>
      ,
      sortable: true


    },
  ]
  // console.log(users)
  return (
    <>
      <div className="feedMain">
        <Datatable columns={columns} data={users} />
      </div>
    </>

  )
}
