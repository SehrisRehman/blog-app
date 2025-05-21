import React from 'react'

const BlogTableItem = ({email,date,mongoId,deleteEmail}) => {

    const EmailDate = new Date(date);
  return (
    <tr className='bg-white border-b text-left'>
      <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        <p>{email?email:"No Email"}</p>
      </th>
      <td className='px-6 py-4'>
        {EmailDate.toDateString()}
      </td>
      <td onClick={()=>deleteEmail(mongoId)} className='px-6 py-4 cursor-pointer'>
        X
      </td>
    </tr>
  )
}

export default BlogTableItem
