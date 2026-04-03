import { useState } from 'react'
import Input from './Component/Input'
import PostBlog from './Component/PostBlog'
function App() {

  return (
    <main className='flex flex-col items-center justify-center'>
      <div className='flex flex-col justify-center items-center text-center bg-zinc-900 p-5 m-10 rounded-lg'>
        <h1 className='text-2xl'>Blog post</h1>
        <Input />
        <button>Create Post</button>
      </div>
      <div>
        <PostBlog />
      </div>
    </main>
  )
}

export default App
