import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div className='row'>
    <div className='col-3'>Side Menu
    <Link to="/home" >Back</Link>
    </div>
    <div className='col-9'>Profile Details</div>
</div>
  )
}
