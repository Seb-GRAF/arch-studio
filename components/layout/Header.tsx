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
  const [isNavOpen, setIsNavOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const html = document.querySelector('html')

    if (isNavOpen) html?.classList.add('fixed')
    else html?.classList.remove('fixed')
  }, [isNavOpen])

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
    <header className='tablet:mx-[12vw] desktop:mx-0 relative flex flex-col'>
      <div className='p-8 tablet:px-0 tablet:py-14 flex justify-between items-center tablet:max-w-lg bg-white z-50'>
        {/* LOGO */}
        <Link href={'/'} passHref>
          <a>
            <span className='sr-only'>Arch</span>
            <img
              src='/assets/logo-dark.svg'
              alt='logo'
              className='w-20 tablet:w-24'
            />
          </a>
        </Link>

        {/* DESKTOP NAV */}
        <nav className='top-full right-0 hidden tablet:flex gap-14 text-gray-100 font-bold leading-[25px] whitespace-nowrap'>
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
        <button
          className='tablet:hidden w-6'
          onClick={() => {
            setIsNavOpen((prev) => !prev)
          }}>
          <figure className='flex items-center justify-center'>
            <img
              src={`/assets/icons/icon-${
                isNavOpen ? 'close' : 'hamburger'
              }.svg`}
              alt='open menu'
            />
          </figure>
        </button>
      </div>

      {/* MOBILE NAV */}
      {isNavOpen && (
        <>
          <nav className='nav flex absolute top-full right-0 bg-lightBlue w-[90%] py-10 px-12 flex-col gap-4 z-50'>
            {data.nav.map(([href, label]) => (
              <Link href={href} passHref key={`navLink-${href}`}>
                <a className='capitalize heading-sm'>{label}</a>
              </Link>
            ))}
          </nav>

          {/* OVERLAY */}
          <div
            className='overlay fixed w-[120%] h-[120%] bg-black/70 z-40 -top-[10%] -left-[10%]'
            onClick={() => {
              setIsNavOpen((prev) => !prev)
            }}></div>
        </>
      )}

      {/* PAGE NAME */}
      <div
        aria-hidden='true'
        className='text-divider absolute rotate-90 origin-left -top-3 -left-[6vw] desktop:-left-20 tablet:flex items-center tracking-[18px] gap-12 pointer-events:none hidden'>
        <div className='w-28 bg-divider h-px'></div>
        <p className='uppercase'>{pageName}</p>
      </div>
    </header>
  )
}

export default Header
