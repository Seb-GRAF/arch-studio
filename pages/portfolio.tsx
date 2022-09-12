import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { useAppContext } from '../contexts/Context'
import { useWindowSize } from '../hooks/useWindowSize'
import Image from 'next/image'
import Link from 'next/link'

const Portfolio: NextPage = () => {
  const data = useAppContext()
  const { media } = useWindowSize()

  if (!data) return <div>Loading...</div>
  return (
    <Layout>
      <ul className='px-8 py-16 tablet:p-0 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3'>
        {data.portfolio.projects.map(({ date, image, link, name }, index) => (
          <li key={`project-${index}`}>
            <Link href={link.href}>
              <a className='relative h-64 tablet:h-96 desktop:h-[35rem] w-full p-6 tablet:p-10 text-white flex flex-col justify-end group'>
                <h2 className='heading-sm'>{name}</h2>
                <p>{date}</p>

                <div className='-z-10 after:content-[""] after:absolute after:w-full after:h-full after:bg-gradient-to-t after:from-black/70 after:to-transparent after:inset-0'>
                  <Image
                    src={image[media]}
                    alt={name}
                    layout='fill'
                    objectFit='cover'
                    className='group-hover:scale-105 duration-500 ease-out group-hover:brightness-110 transition-[filter, transform]'
                  />
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Portfolio
