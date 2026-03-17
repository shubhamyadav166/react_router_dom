import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userid } = useParams();
    return (
        <div className='flex justify-center bg-gray-600 p-4 text-3xl text-white'>
            <h1> User:{userid}</h1>
        </div>
    )
}

export default User
