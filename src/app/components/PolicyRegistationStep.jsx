
'use client';
import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/navigation';


export default function PolicyRegistationStep() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState();
    console.log(activeIndex)
    const toast = useRef(null);
    const items = [
        {
            label: 'Product Selection',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
                router.push('/product');
            }
        },
        {
            label: 'Premium Calculation',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Second Step', detail: event.item.label });
                router.push('/buy/basic-info');
            }
        },
        {
            label: 'Benefit Detail',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Third Step', detail: event.item.label });
                router.push('/buy/benefit-detail');
            }
        },
        {
            label: 'Personal',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Third Step', detail: event.item.label });
                router.push('/buy/personal-info');
            }
        },
        {
            label: 'eKyc',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                router.push('/buy/e-kyc')
            }
        },
        {
            label: 'Payment',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                router.push('/buy/payment-info')
            }
        }
    ];

    return (
        <div className="p-10 card">
            <Toast ref={toast}></Toast>
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
        </div>
    )
}
        