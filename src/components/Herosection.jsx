import React from 'react'

export default function Herosection() {
  return (
    <div className='flex justify-center gap-10 mt-20'>
      <div>
        <h1 className='text-[38px] font-bold'>
            Hi, I am Success, <br />Creative Technologist
        </h1>
        <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea error perferendis maiores  <br />nisi excepturi aspernatur corrupti nobis cumque deleniti doloribus molestias tenetur, <br /> dignissimos consequuntur sed sapiente possimus eaque consectetur.</p>

        <button className='bg-red-500 p-3 mt-4 text-sm text-white  hover:bg-red-600'>Download Resume</button>
      </div>
      <div>
        <img src="/public/images/smile.JPG" alt="tiger" className='w-60  h-60 rounded-full' />
      </div>
    </div>
  )
}
