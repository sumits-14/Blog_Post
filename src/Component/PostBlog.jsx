import React from 'react'

function PostBlog() {
     return (
          <div>
               <div className='flex flex-col items-center gap-3'>
                    <h2>{"Title"}</h2>
                    <p>{"Description"}</p>
                    <button className='bg-green-500 p-1.5 rounded-md text-md'>Delete</button>
               </div>
          </div>
     )
}

export default PostBlog
