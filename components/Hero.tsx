import React from 'react'
import Image from 'next/image'

interface Props {
  pageName: string
  heading: string
  paragraph: string
  imageSrc: string
}

const Hero = ({
  pageName,
  heading,
  paragraph,
  imageSrc,
}: Props): JSX.Element => {
  return (
    <section className='relative mb-20 tablet:mb-48 desktop:mb-52'>
      <div className='h-64 tablet:h-[45rem] w-full brightness-75 -z-10 desktop:max-w-[55%]'>
        <Image
          src={imageSrc}
          alt=''
          layout='fill'
          objectFit='cover'
          priority={true}
        />
      </div>

      <div className='bg-white w-[90%] px-8 tablet:pl-14 desktop:pl-44 pt-16 tablet:pt-40 desktop:pt-56 relative -mt-11 max-w-2xl desktop:max-w-2xl tablet:max-w-none tablet:absolute tablet:bottom-0 tablet:right-0 tablet:mt-0 tablet:h-[26rem] desktop:h-[30rem]'>
        <h2 className='text-5xl tablet:heading-md font-bold pb-5 tablet:pb-10 max-w-lg'>
          {heading}
        </h2>
        <p className='desktop:max-w-md'>{paragraph}</p>

        <span className='hidden tablet:block absolute text-[19vw] desktop:heading-xl font-bold text-lightBlue top-2 desktop:-top-20 right-0 desktop:right-14 capitalize'>
          {pageName}
        </span>

        {/* DIVIDER SMALL */}
        <div className='hidden tablet:block desktop:hidden absolute top-8 w-16 h-px bg-divider my-16'></div>
      </div>
    </section>
  )
}

export default Hero
