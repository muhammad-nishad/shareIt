import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Profile from '../../components/Profile/Profile'

export default function ProfilePage() {
  const { user } = useSelector(state => ({ ...state }))
  const { id } = useParams();
  let own = false;
  if (id && id === user._id) {
    own = true;
  }
  return (
    <>
      <Profile id={id}own />
    </>
  )
}
