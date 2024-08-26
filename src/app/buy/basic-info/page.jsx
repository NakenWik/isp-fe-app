'use client'
import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { Card } from 'primereact/card';
import { useRouter } from 'next/navigation';
import ProductBenefitDetail from '@/app/components/ProductBenefitDetail';

import applicationForm from '@/data/application-submit-data.js';
import PolicyRegistationStep from '@/app/components/PolicyRegistationStep';
import ProductSelection from '@/app/components/ProductCard';
import { useCart } from '@/app/context/InsureCartProvider';

const PremiumCalculation = () => {
    const router = useRouter();
    const initState = useCart();

    const premiumCalCondition = initState.application.premiumCalCondition;
    const [age, setAge] = useState(premiumCalCondition.age);
    const [gender, setGender] = useState(premiumCalCondition.gender);
    const [premium, setPreimum] = useState(premiumCalCondition.premiumPerYear);

    useEffect(() => {initState.application.premiumCalCondition.age = age;},[age]);
    useEffect(() => {
        initState.application.premiumCalCondition.gender = gender;
        initState.application.insureInfo.gender = gender;
    },[gender]);
    useEffect(() => {initState.application.premiumCalCondition.premiumPerYear = premium;},[premium]);
    
    const onPageSubmit = () => {
        const baseProduct = initState.application.productList.filter((item)=>item.productType==='BASE');
        baseProduct[0].sa = premium*20;
        baseProduct[0].premium = premium;
        router.push('/buy/benefit-detail');
    }

  return (
    <div>
        <div>
            <PolicyRegistationStep pIndex={1} />
        </div>
        <div className='grid grid-cols-2 justify-items-center'>
            <div className='w-11/12 '>
                <ProductSelection />
            </div>
            <div className='flex flex-col w-11/12 p-10 text-left gap-11 text-wrap'>
                    <Card title = "กรอกเพศ และ อายุเพื่อดูผลประโยชน์" >
                            <div className='px-4'>
                                <hr className='pt-10'/>
                                <div className="flex gap-5">
                                    <label htmlFor="horizontal-buttons" className="block mb-2 font-bold">Age</label>
                                    <InputNumber inputId="minmax-buttons" value={age} onValueChange={(e) => setAge(e.value)} buttonLayout='stacked' mode="decimal" showButtons={true} min={1} max={100} />
                                </div>
                                
                                <div className="flex gap-5">
                                    <label htmlFor="horizontal-buttons" className="block mb-2 font-bold">เพศ</label>
                                    <div className="flex align--center">
                                        <RadioButton inputId="Male" name="gender" value="Male" onChange={(e) => setGender(e.value)} checked={gender === 'Male'} />
                                        <label htmlFor="Male" className="ml-2">ชาย</label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="FeMale" name="gender" value="FeMale" onChange={(e) => setGender(e.value)} checked={gender === 'FeMale'} />
                                        <label htmlFor="FeMale" className="ml-2">หญิง</label>
                                    </div>
                                </div> 
                                <div className="flex">
                                <label htmlFor='horizontal-buttons' className='block font-bold mb2'>เบี้ยประกันภัยรายปีที่ต้องการ</label>
                                    <InputNumber inputId="horizontal-buttons" value={premium} onValueChange={(e) => setPreimum(e.value)} showButtons buttonLayout="horizontal" step={1000}
                                        decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                                        mode="currency" currency="THB" />
                                </div>
                                <div className='w-full pt-10'>
                                    <Button className='w-full ' label="Submit" icon="pi pi-check" iconPos="right" onClick={()=>{onPageSubmit()}} />
                                </div>
                            </div>
                        
                    </Card> 

                </div>
        </div>
    </div>
  )
}

export default PremiumCalculation