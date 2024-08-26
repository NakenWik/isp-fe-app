'use client'
import { Card } from "primereact/card";
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import PolicyRegistationStep from "@/app/components/PolicyRegistationStep";
import { useCart } from "@/app/context/InsureCartProvider";

const BenefitDetail = () => {
    
    const router = useRouter();
    const initState = useCart();

    const baseProduct = initState.application.productList.filter((item)=>item.productType==='BASE');
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            // labels: baseProduct.policyValueList[0].labelY,
            labels: baseProduct[0].policyValueList[0].labelY,
            datasets: [
                {
                    label: 'เบี้ยประกัน',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: baseProduct[0].policyValueList[0].premium
                },
                {
                    label: 'เงินคืน',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: baseProduct[0].policyValueList[0].coupon
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

  return (
    <div className='w-full p-10 text-center'>
        <div>
            <PolicyRegistationStep />
        </div>
        <Card title="ควมคุ้มครองและผลประโยชน์">
            <labe className="block mb-2 font-bold">ทุนประกัน: {baseProduct.map((item)=>item.sa)} บาท</labe>
        <labe className="block mb-2 font-bold">เบี้ยประกัน: {baseProduct.map((item)=>item.premium)} บาท</labe>
        </Card>
      <hr />
        <Card title="ผลประโยชน์">
            <div className="card">
                <Chart type="bar" data={chartData} options={chartOptions} />
            </div>
        </Card>
        <div className="justify-end w-11/12 p-10">
        <Button label="Next-->" icon="pi pi-check" iconPos="right" onClick={()=>{router.push('/buy/personal-info');}}/>
        </div>
    </div>
  );
};

export default BenefitDetail;
