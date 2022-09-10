import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { Button } from '../components'
import Image from 'next/image'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/staticdata', fetcher)
  const [parsedData, setParsedData] = useState<any>()

  console.log(parsedData)

  useEffect(() => {
    if (data) {
      setParsedData(JSON.parse(data))
    }
  }, [data])

  if (error) return <div>Failed to load</div>
  if (!parsedData) return <div>Loading...</div>
  return (
    <Layout>
      {/* SLIDES */}
      <section className='relative h-[35rem] sm:h-[45rem] flex flex-col justify-center items-start p-8 sm:p-14 xl:p-48 text-white '>
        <h2 className='heading-md sm:heading-lg mb-2 word-spacing-xl'>
          {parsedData.home.hero.slides[0].heading}
        </h2>
        <p className='mb-20 sm:mb-10'>
          {parsedData.home.hero.slides[0].paragraph}
        </p>
        <Button href={parsedData?.home.hero.link.href}>
          {parsedData.home.hero.link.name}
        </Button>
        <figure className='absolute top-0 left-0 h-full w-full -z-10 brightness-50'>
          <Image
            src={parsedData.home.hero.slides[0].image.desktop}
            layout='fill'
            priority={true}
          />
        </figure>
      </section>

      {/* WELCOME */}
      <section className='p-8 mb-28 sm:mt-24'>
        {/* DIVIDER SMALL */}
        <div className='sm:hidden w-16 h-px bg-divider my-16'></div>

        {/* WELCOME DIVIDER */}
        <span className='text-center hidden sm:block sm:text-9xl sm:font-bold xl:heading-xl text-gray-300'>
          Welcome
        </span>
        <h2 className='text-5xl font-bold sm:mb-10'>
          {parsedData.home.welcome.heading}
        </h2>
        {parsedData.home.welcome.paragraphs.map(
          (paragraph: string, index: number) => (
            <p key={`welcome-${index}`} className='mt-5 text-gray-800'>
              {paragraph}
            </p>
          )
        )}
      </section>

      {/* TEAM */}
      <section className='relative h-[35rem] sm:h-[45rem] flex flex-col justify-center items-start p-8 sm:p-14 xl:p-48 text-white '>
        <h2 className='text-5xl font-bold sm:heading-lg mb-5 sm:mb-8 max-w-lg'>
          {parsedData.home.team.heading}
        </h2>

        <Button href={parsedData?.home.hero.link.href}>
          {parsedData.home.hero.link.name}
        </Button>
        <figure className='absolute top-0 left-0 h-full w-full -z-10 brightness-50'>
          <Image src={parsedData.home.team.image.desktop} layout='fill' />
        </figure>
      </section>
    </Layout>
  )
}

export default Home
