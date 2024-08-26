'use client'
import { Card } from "primereact/card";
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const ProductBenefitDetail = () => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['ปีที่ 1', 'ปีที่ 2', 'ปีที่ 3', 'ปีที่ 4', 'ปีที่ 5', 'ปีที่ 6', 'ปีที่ 7'],
            datasets: [
                {
                    label: 'เบี้ยประกัน',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [35000, 35000, 35000, 35000, 35000, 0, 0]
                },
                {
                    label: 'เงินคืน',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [5000, 5000, 5000, 5000, 5000, 5000, 35000*5]
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
    <div>
      <div class="p-10">
        <Card title="ควมคุ้มครองและผลประโยชน์" className="w-11/12 ">
            <labe className="block mb-2 font-bold">ทุนประกัน: 500,000 บาท</labe>
            <labe className="block mb-2 font-bold">เบี้ยประกัน: 35,000 บาท</labe>
        </Card>
        
      </div>
      <div class="p-10">
        <Card title="ผลประโยชน์"> 
            <div className="card">
                <Chart type="bar" data={chartData} options={chartOptions} />
            </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductBenefitDetail;
