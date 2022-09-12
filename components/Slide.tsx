import Image from 'next/image'
import { Button } from '.'
import { useWindowSize } from '../hooks/useWindowSize'

interface Props {
  slideData: any
}

const Slide = ({ slideData }: Props): JSX.Element => {
  const { media } = useWindowSize()

  return (
    <div className='relative h-[35rem] tablet:h-[45rem] flex flex-col justify-center items-start p-8 tablet:p-14 desktop:p-48 text-white overflow-hidden'>
      <h2 className='heading-md tablet:heading-lg mb-2 max-w-xs'>
        {slideData.heading}
      </h2>

      <p className='mb-10 max-w-xl'>{slideData.paragraph}</p>

      <Button href='/portfolio'>See Our Portfolio</Button>

      <div className='absolute top-0 left-0 h-full w-full -z-10 brightness-50'>
        <Image
          src={
            media === 'mobile'
              ? slideData.image.mobile
              : media === 'tablet'
              ? slideData.image.tablet
              : slideData.image.desktop
          }
          layout='fill'
          objectFit='cover'
          priority={true}
        />
      </div>
    </div>
  )
}

export default Slide
