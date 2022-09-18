import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { useAppContext } from '../contexts/Context'
import { useWindowSize } from '../hooks/useWindowSize'
import { Hero } from '../components'
import Image from 'next/image'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact: NextPage = () => {
  const data = useAppContext()
  const { media } = useWindowSize()

  if (!data) return <div>Loading...</div>
  return (
    <Layout>
      <Hero
        pageName='contact'
        heading='Tell us about your project'
        paragraph='We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!'
        imageSrc={`/assets/contact/desktop/image-hero.jpg`}
      />

      {/* CONTACT DETAILS */}
      <section className='px-8 desktop:px-0 mb-12 tablet:mb-48'>
        {/* DIVIDER SMALL */}
        <div className='w-16 h-px bg-divider mb-20 desktop:mb-12' />

        <div className='grid desktop:grid-cols-3'>
          <h2 className='mb-8 tablet:mb-14 text-5xl tablet:heading-md font-bold word-spacing-xl'>
            {data.contact.details.heading}
          </h2>

          <ul className='space-y-10 desktop:space-y-0 desktop:grid desktop:grid-cols-2 desktop:col-span-2'>
            {data.contact.details.addresses.map((address, index) => (
              <li
                key={`address-${index}`}
                className='grid tablet:grid-cols-2 tablet:items-center desktop:grid-cols-1 max-w-2xl'>
                <address className='text-gray-800 not-italic mb-8'>
                  <h3 className='font-bold mb-4'>{address.name}</h3>
                  <p>Mail : {address.mail}</p>
                  <p>Address : {address.address}</p>
                  <p>Phone : {address.phone}</p>
                </address>

                <button className='font-bold flex gap-4 group ml-2 tablet:place-content-end tablet:mt-8 desktop:place-content-start desktop:mt-0'>
                  <span>View on Map</span>
                  <img
                    src='/assets/icons/icon-arrow-black.svg'
                    alt=''
                    className='group-hover:translate-x-2 transition-transform'
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MAP */}
      <section className='mb-12 tablet:mb-48'>
        <div className='h-[22rem] tablet:h-[35rem] w-full relative'>
          <Image
            src={`/assets/contact/${media}/image-map.png`}
            alt='location map'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </section>

      {/* CONNECT */}
      <section className='px-8 desktop:px-0 grid desktop:grid-cols-3'>
        <h2 className='tablet:mb-6 text-5xl tablet:heading-md font-bold max-w-[10rem] tablet:max-w-full'>
          Connect with us
        </h2>

        <form action='' className='grid desktop:col-span-2'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            className='border-b-black border-b pb-3 pl-8 pt-8'
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='border-b-black border-b pb-3 pl-8 pt-8'
          />
          <textarea
            name='message'
            placeholder='Message'
            className='border-b-black border-b pb-3 pl-8 pt-8 min-h-[6rem] max-h-[12rem]'
          />
          <button
            type='submit'
            className='justify-self-end p-6 aspect-square w-fit bg-gray-900 hover:bg-gray-800 active:bg-gray-500 text-white font-bold flex items-center justify-center transition-colors'>
            <img src='/assets/icons/icon-arrow.svg' alt='' className='' />
          </button>
        </form>
      </section>
    </Layout>
  )
}

export default Contact
