import React from 'react'
import './Profile.css'

function Profile({ name, cId }) {
    return (
        <div className='profile'>
            <div className='intro'>
                <p className='fullName'>{name}</p>
                <p className='cid'>customer Id : {cId}</p>
            </div>
            <div className='decryption'>
                ...
            </div>
        </div>
    )
}

export default Profile