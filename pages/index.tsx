import { useEffect, useState, useRef } from 'react'
import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { Button, Slide } from '../components'
import Image from 'next/image'
import { useAppContext } from '../contexts/Context'
import Link from 'next/link'
import { useWindowSize } from '../hooks/useWindowSize'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { getTransitionSizes } from '@formkit/auto-animate'

const Home: NextPage = () => {
  const data = useAppContext()
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [imageRef] = useAutoAnimate<HTMLDivElement>({
    duration: 500,
    easing: 'linear',
  })

  const { media } = useWindowSize()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide === 3) setCurrentSlide(0)
      else setCurrentSlide((prev) => prev + 1)
    }, 8000)
    return () => clearTimeout(timer)
  }, [currentSlide])

  if (!data)
    return (
      <div className='w-screen h-screen flex items-center justify-center'>
        Loading...
      </div>
    )
  return (
    <Layout>
      {/* SLIDES */}
      <section className='relative'>
        <div ref={imageRef}>
          {data.home.hero.slides.map(
            (slide, index) =>
              index === currentSlide && (
                <Slide slideData={slide} key={`slide-${index}`} />
              )
          )}
        </div>
        {/* SLIDE SELECT */}
        <div className='absolute bottom-0 desktop:-left-20 left-0 '>
          {[1, 2, 3, 4].map((slide, index) => (
            <button
              className={`w-10 tablet:w-20 aspect-square text-xs tablet:text-xl  ${
                currentSlide === index
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-800 hover:bg-lightBlue transition-colors duration-300 active:bg-white'
              }`}
              onClick={() => {
                setCurrentSlide(index)
              }}
              key={`slide-${index}`}>
              0{slide}
            </button>
          ))}
        </div>
      </section>

      {/* WELCOME */}
      <section className='relative p-8 tablet:px-0 mb-28 tablet:mt-24 desktop:mt-32'>
        {/* DIVIDER SMALL */}
        <div className='tablet:hidden w-16 h-px bg-divider my-16'></div>

        {/* WELCOME DIVIDER */}
        <span className='text-center hidden tablet:block tablet:text-9xl tablet:font-bold tablet:text-[18vw] desktop:heading-xl text-lightBlue desktop:absolute desktop:z-10 desktop:top-0'>
          Welcome
        </span>

        {/* HEADING AND TEXT */}
        <div className='desktop:flex desktop:justify-end desktop:items-end w-full desktop:mt-12 desktop:gap-32'>
          <div className='desktop:max-w-md '>
            <h2 className='text-5xl font-bold tablet:mb-10 desktop:max-w-xs'>
              {data.home.welcome.heading}
            </h2>
            <div className='flex flex-col gap-5'>
              {data.home.welcome.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={`welcome-${index}`} className='text-gray-800'>
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className='hidden desktop:block w-96 h-[33rem] relative'>
            <Image
              src={data.home.welcome.image.desktop}
              objectFit='cover'
              layout='fill'
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className='relative h-[35rem] tablet:h-[45rem] flex flex-col justify-center items-start p-8 tablet:p-14 desktop:p-48 text-white '>
        <h2 className='text-5xl font-bold tablet:heading-lg mb-5 tablet:mb-8 max-w-lg'>
          {data.home.team.heading}
        </h2>

        <Button href={data?.home.hero.link.href}>
          {data.home.hero.link.name}
        </Button>
        <figure className='absolute top-0 left-0 h-full w-full -z-10 brightness-50'>
          <Image
            src={
              media === 'mobile'
                ? data.home.team.image.mobile
                : media === 'tablet'
                ? data.home.team.image.tablet
                : data.home.team.image.desktop
            }
            layout='fill'
            objectFit='cover'
          />
        </figure>
      </section>

      {/* FEATURED */}
      <section className='relative px-8 tablet:px-0 pt-20 tablet:mt-24'>
        <div className='tablet:flex items-center justify-between mb-11 tablet:mb-20'>
          <h2 className='text-5xl tablet:text-6xl font-bold '>Featured</h2>
          <div className='hidden tablet:block'>
            <Button href='/portfolio'>See All</Button>
          </div>
        </div>
        <ul className='flex flex-col desktop:flex-row gap-6 mb-6'>
          {data.portfolio.projects
            .filter((project) => project.featured === true)
            .map(({ name, image, link }, index) => (
              <li
                key={`featuredProject-${index}`}
                className='relative w-full h-[15rem] desktop:h-[35rem] p-6 tablet:p-10 group'>
                <Link href={link.href} passHref>
                  <a className='text-white flex flex-col justify-end h-full'>
                    <h3 className='heading-sm'>{name}</h3>
                    <span>View All Projects</span>
                    <div className='-z-10 after:content-[""] after:absolute after:w-full after:h-full after:bg-gradient-to-t after:from-black/70 after:to-transparent after:inset-0'>
                      <Image
                        src={
                          media === 'mobile'
                            ? image.mobile
                            : media === 'tablet'
                            ? image.tablet
                            : image.desktop
                        }
                        alt={name}
                        layout='fill'
                        objectFit='cover'
                        className='group-hover:scale-105 duration-500 ease-out group-hover:brightness-110 transition-[filter, transform]'
                      />
                    </div>

                    {/* NUMBER DECORATION */}
                    <div className='hidden pointer-event-none tablet:flex absolute right-4 desktop:right-0 top-2 desktop:top-0 justify-center items-center text-[250px] font-bold h-full desktop:h-fit opacity-40 leading-tight'>
                      {index + 1}
                    </div>
                  </a>
                </Link>
              </li>
            ))}
        </ul>
        <div className='tablet:hidden'>
          <Button href='/portfolio'>See All</Button>
        </div>
      </section>
    </Layout>
  )
}

export default Home
