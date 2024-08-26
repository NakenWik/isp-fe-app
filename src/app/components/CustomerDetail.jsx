'use client';
import { useCart } from '../context/InsureCartProvider';
import { useState } from 'react';

const CustomerDetail = () => {

  const initState = useCart();
  
  return (
    <div className='container p-10 mx-20'>
        <div>CustomerDetail</div>
        <div className='p-2 text-left w-96'>
            <label>First Name</label> : {initState.application.insureInfo.firstNameTh}
        </div>
        <div className='p-2 text-left w-96'>
            <label>Last Name</label> : {initState.application.insureInfo.lastNameTh}
        </div>
        <div className='p-2 text-left w-96'>
            <label>Gender </label> : {initState.application.insureInfo.gender}
        </div>
        <div className='p-2 text-left w-96'>
            <label>CitizenId </label> : {initState.application.insureInfo.citizenId}
        </div>
        <div className='p-2 text-left w-96'>
            <label>Date Of Birth </label> : {initState.application.insureInfo.dateOfBirth}
        </div>
        <div className='p-2 text-left w-96'>
            <label>Phone Number </label> : {initState.application.insureInfo.phoneNumber}
        </div>
        <div className='p-2 text-left w-96'>
            <label>Email </label> : {initState.application.insureInfo.email}
        </div>
    </div>
  )
}

export default CustomerDetail
