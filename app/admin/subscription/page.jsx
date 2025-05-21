'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EmailTableItem from '@/Components/AdminComponents/EmailtableItem'
import { toast } from 'react-toastify';


const page = () => {

  const [emails,setemails] = useState([]);

  const fetchEmail = async () => {
        const response = await axios.get('/api/email');
        setemails(response.data.emails)
  }

  const DeleteEmail = async (mongoId) =>{
    const response = await axios.delete('/api/email',{
      params:{
        id:mongoId,
      }
    });
      if(response.data.success){
          toast.success(response.data.success);
          fetchEmail();
      }else{
        toast.error("Error")

      }
  }

  useEffect(()=>{
    fetchEmail();
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Subscription</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrolbar-hide'>
        <table className='w-full  text-sm text-gray-500'>
            <thead className='text-sm text-gray-700 text-left uppercase  bg-gray-50'>
                <tr>
                    <th scope='col' className='  px-6 py-3'>
                     Email
                    </th>
                    <th scope='col' className='hidden sm:block px-6 py-3'>
                      Date
                    </th>
                    <th scope='col' className=' px-6 py-3'>
                     Action
                    </th>
                </tr>
            </thead>
            <tbody>
              {emails.map((item,index)=>{
                
               return <EmailTableItem key={index} email={item.email}  mongoId={item._id} date={item.date} deleteEmail={DeleteEmail} /> 
              })}
              
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default page
