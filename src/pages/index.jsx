import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import VueLogo from '@/images/logos/VueLogo.png'
import MongoDBLogo from '@/images/logos/MongoDBLogo.png'
import SQLLogo from '@/images/logos/SQLLogo.png'
import NodeLogo from '@/images/logos/NodeLogo.png'
import NetLogo from '@/images/logos/NETLogo.svg.png'
import ReactIcon from '@/images/logos/ReactIcon.svg.png'
import image1 from '@/images/photos/image1.jpeg'
import image2 from '@/images/photos/image2.webp'
import image3 from '@/images/photos/image3.jpeg'
import image4 from '@/images/photos/image4.webp'
import image5 from '@/images/photos/image5.jpeg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import WhatWeDo from './what-we-do'
import AboutUs from './aboutUs'

function Resume() {
  let resume = [
    {
      tech: 'React',
      logo: ReactIcon,
    },
    {
      tech: 'Vue',
      logo: VueLogo,
    },
    {
      tech: '.NET',
      logo: NetLogo,
    },
    {
      tech: 'Node.Js',
      logo: NodeLogo,
    },
    {
      tech: 'SQL',
      logo: SQLLogo,
    },
    {
      tech: 'MongoDB',
      logo: MongoDBLogo,
    },
  ]

  return (
    <div
      className="border-black-100 rounded-2xl border border-orange-500 p-6 dark:border-zinc-700/40"
      style={{ paddingTop: '20px', paddingBottom: '20px' }}
    >
      <h2 className="flex justify-center align-middle text-2xl font-semibold text-orange-500 dark:text-zinc-100">
        <span className="mb-4 ml-3 mt-5">
          Working with the latest technologies on the market
        </span>
      </h2>
      <ol className="align-items-center mb-4 mt-6 flex flex-row justify-between gap-10 space-y-4 align-middle">
        {resume.map((role, roleIndex) => (
          <li
            key={roleIndex}
            className="flex items-center gap-4"
            style={{ marginTop: '-4px' }}
          >
            <div className="relative mt-3.5 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd
                className="mt-3 w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
                style={{ lineHeight: '1.5' }}
              >
                {role.tech}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head></Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-orange-500 dark:text-zinc-100 sm:text-5xl">
            BinaryBrew
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Brewing up digital solutions
          </p>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div>
          <div className="mb-14 w-full space-y-10 pb-16 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
      <Container className="mt-14 space-y-10 pb-16 lg:pl-16 xl:pl-24">
        <AboutUs />
      </Container>
      <Container className="mt-14 space-y-10 pb-16 lg:pl-16 xl:pl-24">
        <WhatWeDo />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
