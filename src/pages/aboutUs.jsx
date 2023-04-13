import React from 'react'
import Image from 'next/image'
import padawans from '@/images/photos/padawans.jpeg'

const AboutUs = () => {
  return (
    <>
      <h2 className="mb-10 flex justify-center text-2xl font-semibold text-orange-500 dark:text-zinc-100">
        About us
      </h2>
      <div className="flex w-full justify-center align-middle">
        <div className="flex w-1/2 items-center justify-center">
          <span
            className="text-xl font-semibold text-zinc-900 dark:text-zinc-100"
            style={{ textAlign: 'center' }}
          >
            We are a professional team with the spirit of a startup that
            <span className="text-bold"> delivers like an enterprise </span>
          </span>
        </div>
        <div className="w-1/2">
          <Image src={padawans} alt="" />
        </div>
      </div>
    </>
  )
}

export default AboutUs
