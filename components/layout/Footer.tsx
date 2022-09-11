import Link from 'next/link'
import { Button } from '..'

interface Props {
  data: {
    nav: string[][]
    link: {
      name: string
      href: string
    }
  }
}

const Footer = ({ data }: Props): JSX.Element => {
  return (
    <footer className='isolate relative bg-lightBlue flex flex-col tablet:flex-row items-center gap-8 tablet:gap-0 justify-center tablet:justify-between pb-8 tablet:pb-0 after:content-[""] after:absolute after:top-0 after:right-0 after:bg-white after:w-40 desktop:after:w-32 after:h-full after:-z-10 after:hidden tablet:after:block px-0'>
      <div className='tablet:max-w-xl desktop:max-w-2xl isolate w-full flex flex-col gap-8 tablet:gap-0 tablet:flex-row items-center justify-center tablet:justify-start'>
        {/* SQUARE WITH LOGO */}
        <div className='relative w-full tablet:w-fit h-fit flex justify-center after:content-[""] after:absolute after:top-0 after:left-0 after:bg-white after:w-full after:h-[50%] after:-z-10 tablet:after:hidden'>
          <div className='flex justify-center items-center relative bg-gray-900 text-white aspect-square w-28 desktop:w-48'>
            <img
              src='/assets/logo-light.svg'
              alt='logo'
              className='w-14 desktop:w-24'
            />
          </div>
        </div>

        {/* LINKS */}
        <nav className='flex flex-col tablet:flex-row gap-8 tablet:gap-0 justify-evenly w-full items-center'>
          {data.nav.map(([href, label]) => (
            <Link href={href} passHref key={`navLink-${href}`}>
              <a className='relative items-center capitalize hover:text-black transition-colors whitespace-nowrap'>
                {label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
      {/* CTA */}
      <Button href={data.link.href}>{data.link.name}</Button>
    </footer>
  )
}

export default Footer
