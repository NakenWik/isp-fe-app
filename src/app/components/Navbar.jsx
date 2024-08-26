'use client'
import React from 'react'

import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const items = [
        {
            label: 'หน้าหลัก',
            icon: 'pi pi-home',
            command: ()=>{
                router.push('/');
            }
        },
        {
            label: 'ประกันชีวิตแบบสะสมทรัพย์',
            icon: 'pi pi-star',
            command: () => {
                router.push('/product');
            }
        },
        {
            label: 'ประกันเพื่อการเกษียณ',
            icon: 'pi pi-star',
            command: () => {
                router.push('/product');
            }
        }
        
        
    ];

  return (
    <div className="card ">
        <Menubar model={items} />
    </div>
  )
}

export default Navbar
