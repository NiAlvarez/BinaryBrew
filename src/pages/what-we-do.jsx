import React from 'react'
import Image from 'next/image'
import quality from '@/images/photos/quality.svg'
import software from '@/images/photos/software-development-icon.svg'
import services from '@/images/photos/professional-services-icon.svg'


const WhatWeDo = () => {
  return (
    <div
      className="border-black-100 rounded-2xl border border-orange-500 p-6 dark:border-zinc-700/40"
      style={{ paddingTop: '20px', paddingBottom: '20px' }}
    >
      <h1 className="mb-10 flex justify-center text-2xl font-semibold text-orange-500 dark:text-zinc-100">
        What we do?
      </h1>
      <h2 className="mb-5 text-center text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="text-center">
          We have a recipe to achieve quality innovative solutions based on
          having talents that master agile techniques and flexibility
        </span>
      </h2>
      <ul className="flex flex-row items-center justify-center gap-8 align-middle">
        <li className="flex flex-row items-center justify-center align-middle">
          <Image src={quality} alt="" className="mr-2" />
          <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Quality assurance
          </span>
        </li>
        <li className="flex flex-row items-center justify-center align-middle">
          <Image src={software} alt="" className="mr-2" />
          <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Software development
          </span>
        </li>
        <li className="flex flex-row items-center justify-center align-middle">
          <Image src={services} alt="" className="mr-2" />
          <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Professional services
          </span>
        </li>
      </ul>
    </div>
  )
}

export default WhatWeDo