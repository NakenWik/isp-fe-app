'use client'
import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';
import productBenefitMockup from '@/data/product-benefit';


const ProductSelection = () => {
    const router = useRouter();
    const [productBenefit, setProductBenefit] = useState(productBenefitMockup);

    useEffect(() => {
        fetch('/api/product-benefit')
        .then((res) => res.json())
        .then((data) => {
            setProductBenefit(data.data)
        })
    }, [])
    
    const header = (
        <img alt="Card" src={productBenefit.productImage} />
    );
    
    return (
        <div>
            
            <div className='p-10'>
                <Card key={productBenefit.productCode} title={productBenefit.productNameTh} subTitle={productBenefit.productNameEn} header={header} className="md:w-25rem" onClick={()=>{router.push('/buy/basic-info')}}>
                            <p className="m-1">
                                <ul>
                                    {productBenefit.benefitDetailList.map(item =>
                                        <li >* {item.benefitDescription} </li>
                                    )}
                                </ul>
                            </p>
                </Card>
            </div>
            
        </div>
    )
}

export default ProductSelection
