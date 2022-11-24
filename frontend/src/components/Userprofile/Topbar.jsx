import { Avatar } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import './topbar.css'

export default function Topbar() {
    return (
        <>

            <header>
                <div className="container">
                    <div className="profile">
                        <div className="profile-image">
                            <img style={{ width: 200 }} src='icons/nishad.jpeg' alt='imaggeee' />
                        </div>
                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">
                                john dpee</h1>
                            <button className='btn profile-edit-btn ' >Edit Profile</button>
                            <button aria-label='profile settings' className='btn profile-settings-btn'>
                                <i className='fas fa-cog' ></i>
                            </button>
                        </div>
                        
                        <div className='profile-stats'>
                        <ul>
                            <li><span className='profile-stat-count'>164 posts</span></li>
                            <li><span className='profile-stat-count'>150 followers</span></li>
                            <li><span className='profile-stat-count'>104 following</span></li>
                        </ul>
                    </div>
                    <div className="profile-bio">
                        <p>
                            <span className='profile-real-name'>
                                john
                            </span>
                            sample data needed for sample prupuseee
                        </p>
                    </div>
                    </div>
                    


                   
                </div>
                {/* end of profile sectioin */}
            </header>




        </>
    )
}
