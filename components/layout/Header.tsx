import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type PageName = 'home' | 'portfolio' | 'about us' | 'contact' | '404'

interface Props {
  data: {
    nav: string[][]
  }
}

const Header = ({ data }: Props): JSX.Element => {
  const [pageName, setPageName] = useState<PageName>('home')
  const router = useRouter()

  const toggleNav = (): void => {
    const nav = document.querySelector('.nav')
    const overlay = document.querySelector('.overlay')

    nav?.classList.toggle('hidden')
    nav?.classList.toggle('flex')
    overlay?.classList.toggle('hidden')
  }

  useEffect(() => {
    const pathName = router.asPath

    setPageName(
      pathName === '/'
        ? 'home'
        : pathName === '/portfolio'
        ? 'portfolio'
        : pathName === '/about'
        ? 'about us'
        : pathName === '/contact'
        ? 'contact'
        : '404'
    )
  }, [])

  return (
    <header className='sm:mx-24 xl:mx-0 relative flex flex-col'>
      <div className='p-8 sm:px-0 sm:py-14 flex justify-between items-center sm:max-w-lg bg-white z-50'>
        {/* LOGO */}
        <Link href={'/'} passHref>
          <a>
            <span className='sr-only'>Arch</span>
            <img
              src='/assets/logo-dark.svg'
              alt='logo'
              className='w-20 sm:w-24'
            />
          </a>
        </Link>

        {/* DESKTOP NAV */}
        <nav className='top-full right-0 hidden sm:flex gap-14 text-gray-100 font-bold leading-[25px] whitespace-nowrap'>
          {data.nav.map(([href, label]) => (
            <Link href={href} passHref key={`navLink-${href}`}>
              <a
                className={`relative items-center capitalize hover:text-black transition-colors ${
                  label === pageName ? 'text-black' : 'text-gray-100'
                }`}>
                <span>{label}</span>
                {label === pageName && (
                  <div className='absolute w-6 h-px bg-black left-1/2 -translate-x-1/2 -bottom-2'></div>
                )}
              </a>
            </Link>
          ))}
        </nav>

        {/* HAMBURGER BUTTON */}
        <button className='sm:hidden w-6' onClick={toggleNav}>
          <svg
            viewBox='0 0 24 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect width='24' height='3' fill='#1B1D23' />
            <rect y='7' width='24' height='3' fill='#1B1D23' />
            <rect y='14' width='24' height='3' fill='#1B1D23' />
          </svg>
        </button>
      </div>

      {/* MOBILE NAV */}
      <nav className='nav absolute top-full right-0 bg-lightBlue w-[90%] py-10 px-12 flex-col gap-4 hidden sm:hidden z-50'>
        {data.nav.map(([href, label]) => (
          <Link href={href} passHref key={`navLink-${href}`}>
            <a className='capitalize heading-sm'>{label}</a>
          </Link>
        ))}
      </nav>

      {/* PAGE NAME */}
      <div
        aria-hidden='true'
        className='text-divider absolute rotate-90 origin-left -top-3 -left-12 xl:-left-[3vw] 2xl:-left-[6vw] sm:flex items-center tracking-[18px] gap-12 pointer-events:none hidden'>
        <div className='w-28 bg-divider h-px'></div>
        <p className='uppercase'>{pageName}</p>
      </div>

      {/* OVERLAY */}
      <div
        className='hidden overlay fixed w-screen h-screen bg-black/70 z-40'
        onClick={toggleNav}></div>
    </header>
  )
}

export default Header
