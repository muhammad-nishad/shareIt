import { Stack } from '@mui/material'
import React from 'react'
import AdminFeed from '../../components/AdminFeed/AdminFeed'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import AdminTopbar from '../../components/AdminTopbar/AdminTopbar'
import ReportedPosts from '../ReportedPosts/ReportedPosts'

export default function Adminhome() {
  return (
    <div>
      <AdminTopbar/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
      <AdminSidebar/>
      <AdminFeed />
      </Stack>
    </div>
  )
}

