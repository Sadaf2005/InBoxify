import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function Page() {
  return (
        <div className='flex justify-center items-center h-screen'>
            <SignUp />
        </div>
  ) 
}