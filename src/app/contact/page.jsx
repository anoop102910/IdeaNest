import Image from 'next/image'
import React from 'react'
import Button from '@/components/ui/button'

function Contact() {
  return (
    <div className=''>
      <h1 className='h1-primary text-center mb-16'>Let's Keep in Touch</h1>
      <div className='md:flex items-center justify-between gap-x-5 '>
        <Image src={"/contact.png"} className='w-[400px] rounded-lg' width={600} height={600}/>
        <form className='w-[40%] flex flex-col gap-4 text-white' action="">
          <input  className='px-4 py-2 text-sm rounded-md bg-transparent border border-white outline-none' type="text" placeholder='Enter your name' />
          <input  className='px-4 py-2 text-sm rounded-md bg-transparent border border-white outline-none' type="text" placeholder='Enter your Email' />
        <textarea  className='px-4 py-2 text-sm rounded-md bg-transparent border border-white outline-none'placeholder='Enter message' name="" id="" cols="30" rows="10"></textarea>
        <Button type='submit' className={"w-min"} text={"Submit"}></Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
