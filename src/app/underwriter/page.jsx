'use client'
import React, { useState, useEffect } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';


const underWritingPolicy = () => {
    const router = useRouter
    const [applications, setApplications] = useState([]);
    const [apiContents, setApiContents] = useState([]);

    // const [lockedCustomers, setLockedCustomers] = useState([]);



    useEffect(() => {
        fetch('/api/applications')
        .then((res) => res.json())
        .then((data) => {
            setApiContents(data.data)
            setApplications(data.data.content)
        })
    }, [])

    console.log(applications)
    console.log(apiContents)
    
    const applicationActionButton = (rowData, options) => {
        const icon = 'pi pi-file-edit';
        const disabled = false;

        return (
        <div className='flex justify-stretch'>
            <Button type="button" disabled={disabled} className="p-5 p-button-sm p-button-text" onClick={() => applicationAction(rowData, options.frozenRow, options.rowIndex, 'Approve')} >Approve</Button>
            
            <Button type="button" disabled={disabled} className="p-5 p-button-sm p-button-text" onClick={() => applicationAction(rowData, options.frozenRow, options.rowIndex, 'Reject')} >Reject</Button>
        </div>
        );
    };

    const applicationAction = (data, frozen, index, status) => {
        data.policyStatus=status;
        console.log(data)
        const res = fetch('/api/applications',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }
        );
        // router.push('/underwriter');
    };

    return (
        <div className="card">
            <DataTable value={applications} 
            // frozenValue={lockedCustomers} 
            scrollable scrollHeight="400px" tableStyle={{ minWidth: '50rem' }}>
                <Column field="applicationId" header="Application"></Column>
                <Column field="proposalNo" header="Proposal Number"></Column>
                <Column field="insureInfo.firstNameTh" header="Insure First Name"></Column>
                <Column field="insureInfo.lastNameTh" header="Insure Last Name"></Column>
                <Column field="policyStatus" header="Application Status"></Column>
                <Column style={{ flex: '0 0 4rem' }} body={applicationActionButton}></Column>
            </DataTable>
        </div>
    );
}

export default underWritingPolicy
