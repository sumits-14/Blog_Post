import React, { useState } from 'react'

const Input = () => {
     const [blog, setBlog] = useState({
          title : "",
          description : ""
     })
  return (
    <div className='flex flex-col gap-5'>
     <input type="text" name='title' placeholder='Enter title' className='p-1 w-100 text-black rounded-md'/>
     <textarea name="description" placeholder='Enter description' value={blog.description} className='w-100 text-black p-1 rounded-md'></textarea>
    </div>
  )
}

export default Input
