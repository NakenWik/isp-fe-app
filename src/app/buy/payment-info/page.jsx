'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from 'primereact/button';
import { useCart } from '@/app/context/InsureCartProvider';
import PolicyRegistationStep from '@/app/components/PolicyRegistationStep';
import CustomerDetail from '@/app/components/CustomerDetail';

const PaymentInfo = () => {
  const router = useRouter();

  const initState = useCart();
  
  const onPageSubmit = () => {
    initState.application.sourceChannel='ONLINE';
    initState.application.policyStatus='Application Submited';
    console.log(initState.application)
    const res = fetch('/api/applications',{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(initState.application)
      }
    );
    router.push('/buy/payment-successfully');
  }
  return (
    <div className='w-full p-10 text-center'>
        <div>
          <PolicyRegistationStep />
        </div>
        <div>
          <CustomerDetail />
        </div>
        <div className="justify-end w-11/12 p-10">
        <Button label="ดำเนินการชำระเงินผ่าน Payment Gateway" icon="pi pi-check" iconPos="right" onClick={()=>{onPageSubmit()}}/>
        </div>
    </div>
  )
}

export default PaymentInfo