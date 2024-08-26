'use client'
import CustomerInfo from '@/app/components/CustomerInfo'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from 'primereact/button'
import { FileUpload } from 'primereact/fileupload'
import React, { useRef } from 'react'
import { Toast } from 'primereact/toast'
import PolicyRegistationStep from '@/app/components/PolicyRegistationStep'

const PersonalInfo = () => {
  const router = useRouter();
  
  const toast = useRef(null);

  const onUpload = () => {
      toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };
  
  return (
    <div className='w-full p-10 text-center'>
      <div>
            <PolicyRegistationStep />
      </div>
      
      <div>
        <CustomerInfo clientType="Insure"/>
      </div>
      <hr />
      {/* <div>
        <CustomerInfo clientType="Policy Owner"/>
      </div> */}
      <div className="justify-end w-11/12 p-10">
        <Button label="Next-->" icon="pi pi-check" iconPos="right" onClick={()=>{router.push('/buy/e-kyc');}}/>
      </div>
    </div>
  )
}

export default PersonalInfo