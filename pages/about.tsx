import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { useAppContext } from '../contexts/Context'
import { useWindowSize } from '../hooks/useWindowSize'
import { Hero } from '../components'
import Image from 'next/image'
import Link from 'next/link'

const About: NextPage = () => {
  const data = useAppContext()
  const { media } = useWindowSize()

  if (!data) return <div>Loading...</div>
  return (
    <Layout>
      <Hero
        pageName='about'
        heading='Your team of professionals'
        paragraph='Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.'
        imageSrc={`/assets/about/desktop/image-hero.jpg`}
      />

      {/* HERITAGE */}
      <section
        data-sal='slide-up'
        className='relative flex gap-32 mb-28 tablet:mb-48 px-8 desktop:px-0'>
        <div className='desktop:flex-1 flex flex-col justify-end'>
          {/* DIVIDER SMALL */}
          <div className='w-16 h-px bg-divider mb-20 desktop:mb-12' />

          <h2 className='mb-8 tablet:mb-14 text-5xl tablet:heading-md font-bold word-spacing-xl'>
            {data.about.heritage.heading}
          </h2>
          <p className='flex flex-col gap-6'>
            {data.about.heritage.paragraphs.map((paragraph, index) => (
              <span key={`heritage-paragraph-${index}`}>{paragraph}</span>
            ))}
          </p>
        </div>
        {media === 'desktop' && (
          <div className='relative flex-1 h-[35rem]'>
            <Image
              src={data.about.heritage.image[media]}
              alt={data.about.heritage.heading}
              layout='fill'
              objectFit='cover'
            />
          </div>
        )}
      </section>

      {/* LEADERS */}
      <section className='flex flex-col desktop:flex-row justify-between px-8 desktop:px-0 desktop:mb-0 mb-12'>
        <div className='desktop:w-96'>
          <h2 className='mb-20 tablet:mb-12 desktop:mb-0 text-5xl tablet:heading-md font-bold word-spacing-xl'>
            {data.about.leaders.heading}
          </h2>
        </div>

        <div className='grid tablet:grid-cols-2 gap-20 tablet:gap-2.5 tablet:gap-y-24 desktop:gap-y-16 desktop:gap-8'>
          {data.about.leaders.people.map((leader, index) => (
            <div
              data-sal='slide-up'
              key={`leader-${index}`}
              className='flex flex-col w-full desktop:w-[21rem]'>
              <div className='w-full h-80 relative mb-3 group'>
                <Image
                  src={leader.image[media]}
                  alt={leader.name}
                  layout='fill'
                  objectFit='cover'
                  className='group-hover:scale-105 transition-transform duration-500 ease-out'
                />
                <div className='hover:opacity-100 focus-within:opacity-100 opacity-0 absolute w-full h-full bg-black/40 flex items-center justify-center gap-4 transition-opacity duration-500 ease-out group'>
                  {leader.links.map((link, index) => (
                    <a href={link.href} key={`social-link-${index}`}>
                      <img src={link.icon} alt='' />
                    </a>
                  ))}
                </div>
              </div>
              <h3 className='heading-sm'>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default About
