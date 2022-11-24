import React from 'react'
import '../Userprofile/topbar.css'
// import './topbar.css'

export default function ProfilePost() {
  return (
    <>
    <main>
        <div className="container">
            <div className="gallery">
                <div className='gallery-item' tabIndex='0'>
                <img  style={{width:300}} src='icons/nishad.jpeg' alt='imaggeee' />
                <img  style={{width:300}} src='icons/nishad.jpeg' alt='imaggeee' />
                <img  style={{width:300}} src='icons/nishad.jpeg' alt='imaggeee' />
                <img  style={{width:300,marginTop:15}} src='icons/nishad.jpeg' alt='imaggeee' />
                <img  style={{width:300,marginTop:15}} src='icons/nishad.jpeg' alt='imaggeee' />
                <img  style={{width:300,marginTop:15}} src='icons/nishad.jpeg' alt='imaggeee' />
                <div className="gallery-item-info">
                    <ul>
                        <li className='gallery-item-likes'><span className='visually-hidden' >Likes</span></li>
                        <li className='gallery-item-comments'><span className='visually-hidden'>comments</span></li>
                    </ul>

                </div>
                </div>

            </div>

        </div>
    </main>
    </>
  )
}
