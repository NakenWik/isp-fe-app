'use client'
import CustomerInfo from '@/app/components/CustomerInfo'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from 'primereact/button'
import { FileUpload } from 'primereact/fileupload'
import React, { useRef } from 'react'
import { Toast } from 'primereact/toast'
import PolicyRegistationStep from '@/app/components/PolicyRegistationStep'
import CustomerDetail from '@/app/components/CustomerDetail'
import applicationForm from '@/data/application-submit-data.js';
import { useCart } from '@/app/context/InsureCartProvider'

const eKyc = () => {
  const initState = useCart();
  
  const router = useRouter();
  const toast = useRef(null);
  // const premiumCalCondition = applicationForm.insureInfo.citizenCardImage
  
    const onUpload = (event) => {
      const file = event.files[0];
      
      initState.application.insureInfo.citizenCardImage = file.name;
      console.log(initState.application.insureInfo.citizenCardImage);
      toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const customBase64Uploader = async (event) => {
      // convert file to base64 encoded
      const file = event.files[0];
      const reader = new FileReader();
      let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

      reader.readAsDataURL(blob);

      reader.onloadend = function () {
          const base64data = reader.result;
      };
  };
    
    
    return (
      <div className='w-full p-10 text-center'>
        <div>
              <PolicyRegistationStep />
        </div>
        <div className="p-10">
          <Image alt='ID Card' width={500} height={500} src={"/images/istockphoto-1073597286-2048x2048.jpeg"}/>
          <Toast ref={toast}></Toast>

          <FileUpload mode="basic" name="file" url="/api/e-kyc/id-card" accept="image/*" onUpload={(e)=>{onUpload(e)}} auto chooseLabel="ID Card Uplaod" />
        </div>
        <hr />
        {/* <div>
          <CustomerDetail/>
        </div> */}
        <hr />
        <div className="justify-end w-11/12 p-10">
          <Button label="Next-->" icon="pi pi-check" iconPos="right" onClick={()=>{router.push('/buy/payment-info');}}/>
        </div>
      </div>
    )
  }

export default eKyc