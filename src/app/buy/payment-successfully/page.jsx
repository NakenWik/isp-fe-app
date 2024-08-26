'use client'
import React from 'react'
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';
import { Card } from 'primereact/card';



const PaymentSuccessfully = () => {
  const router = useRouter();
  return (
    <div className='w-full p-10 text-center'>
        
        <Card title="Payment Successfully.">
            <div>The payment process has been successfully.</div>
            <div className="justify-end w-11/12 p-10">
                <Button label="Next-->" icon="pi pi-check" iconPos="right" onClick={()=>{router.push('/buy/basic-info');}}/>
            </div>
        </Card>
        
    </div>
  )
}

export default PaymentSuccessfully