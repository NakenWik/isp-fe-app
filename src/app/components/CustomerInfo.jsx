'use client'
import React, { useContext, useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { RadioButton } from 'primereact/radiobutton'
import { Calendar } from 'primereact/calendar'
import { useCart } from '../context/InsureCartProvider'


const CustomerInfo = ({clientType}) => {
  const initState = useCart();

  const [gender, setGender] = useState(initState.application.insureInfo.gender);
  const [firstName, setFirstName] = useState(initState.application.insureInfo.firstName);
  const [lastName, setLastName] = useState(initState.application.insureInfo.lastName);

  const [citizenId, setCitizenId] = useState(initState.application.insureInfo.citizenId);
  const [dateOfBirth, setDateOfBirth] = useState(initState.application.insureInfo.dateOfBirth);

  const [phoneNumber, setPhoneNumber] = useState(initState.application.insureInfo.phoneNumber);
  const [email, setEmail] = useState(initState.application.insureInfo.email);
  
  useEffect(() => {initState.application.insureInfo.gender = gender;},[gender]);
  useEffect(() => {initState.application.insureInfo.firstNameTh = firstName;},[firstName]);
  useEffect(() => {initState.application.insureInfo.lastNameTh = lastName;},[lastName]);

  useEffect(() => {initState.application.insureInfo.citizenId = citizenId;},[citizenId]);
  useEffect(() => {initState.application.insureInfo.dateOfBirth = dateOfBirth;},[dateOfBirth]);
  
  useEffect(() => {initState.application.insureInfo.phoneNumber = phoneNumber;},[phoneNumber]);
  useEffect(() => {initState.application.insureInfo.email = email;},[email]);
  
  return (
    
    <div>
      <div>{clientType} Info</div>
      <div className='flex w-10 gap-10'>
        <div className='flex flex-wrap gap-6'>
          
          <div className="flex flex-wrap gap-3">
              <div className="flex align-items-center">
                  <RadioButton inputId="titleMale" name="pizza" value="Male" onChange={(e) => setGender(e.value)} checked={gender === 'Male'} />
                  <label htmlFor="titleMale" className="ml-2">Male</label>
              </div>
              <div c lassName="flex align-items-center">
                  <RadioButton inputId="titleFeMale" name="pizza" value="FeMale" onChange={(e) => setGender(e.value)} checked={gender === 'FeMale'} />
                  <label htmlFor="titleFeMale" className="ml-2">FeMale</label>
              </div>
          </div>
          
          <div className="flex gap-6">
            <div className="flex gap-2 text-left align-middle">
              <label htmlFor="first-name">First Name</label>
              <InputText id="firstName" placeholder='first name' aria-describedby="first-name-help" onChange={(e)=>setFirstName(e.target.value)} />
            </div>

            <div className="flex gap-2 text-left align-middle">
              <label htmlFor="last-name">Last Name</label>
              <InputText id="lastName" placeholder='last name' aria-describedby="last-name-help" onChange={(e)=>setLastName(e.target.value)} />
            </div>
          </div>

          <div className="flex flex-row gap-2 text-left align-middle">
            <label htmlFor="citizenId">CitizenID</label>
            <InputText inputMode='numeric' max={13} id="citizenId" placeholder='CitizenID' aria-describedby="citizenId-help" onChange={(e)=>{setCitizenId(e.target.value); }}/>
          </div>
          
          <div className="flex flex-row gap-2 text-left align-middle">
            <label htmlFor="dateOfBirth">dateOfBirth</label>
            <Calendar value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} dateFormat="dd/mm/yy" />
          </div>

          <div className="flex flex-row gap-2 text-left align-middle">
            <label htmlFor="phoneNumber">Phone Number</label>
            <InputText id="phoneNumber" placeholder='Phone Number' onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
          </div>
          
          <div className="flex flex-row gap-2 text-left align-middle">
            <label htmlFor="email">Email</label>
            <InputText id="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
            
        </div>
        
      </div>


    </div>
  )
}

export default CustomerInfo