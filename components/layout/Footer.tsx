import Link from 'next/link'
import { Button } from '..'

interface Props {
  data: {
    nav: string[][]
  }
}

const Footer = ({ data }: Props): JSX.Element => {
  return (
    <footer className='isolate relative bg-lightBlue flex flex-col sm:flex-row items-center gap-8 sm:gap-0 justify-center sm:justify-between pb-8 sm:pb-0 after:content-[""] after:absolute after:top-0 after:right-0 after:bg-white after:w-40 xl:after:w-32 after:h-full after:-z-10 after:hidden sm:after:block'>
      <div className='max-w-xl xl:max-w-2xl isolate w-full flex flex-col gap-8 sm:gap-0 sm:flex-row items-center justify-center sm:justify-start'>
        {/* SQUARE WITH LOGO */}
        <div className='relative w-full sm:w-fit h-fit flex justify-center after:content-[""] after:absolute after:top-0 after:left-0 after:bg-white after:w-full after:h-[50%] after:-z-10 sm:after:hidden'>
          <div className='flex justify-center items-center relative bg-gray-900 text-white aspect-square w-28 xl:w-48'>
            <svg
              className='w-14 xl:w-24'
              viewBox='0 0 97 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.0822 33.0137L10.8219 39.2694H0L15.3425 1.59814H24.6575L40 39.2694H29.1781L26.9178 33.0137H13.0822ZM20 15.2511L16.5068 24.2009H23.4931L20 15.2511Z'
                fill='currentColor'
              />
              <path
                d='M45.2968 39.2693V27.8081C45.2968 27.0318 45.5175 26.3088 45.9589 25.6391C46.4003 24.9694 46.9825 24.4253 47.7055 24.0067C48.4284 23.5881 49.1933 23.3788 50 23.3788C50.6393 23.3788 51.3432 23.5082 52.1119 23.767C52.8805 24.0257 53.5464 24.3682 54.1096 24.7944L58.0822 16.8035C57.4277 16.3164 56.5982 15.9207 55.5936 15.6163C54.589 15.3119 53.6377 15.1597 52.7397 15.1597C51.3546 15.1597 50.0114 15.5135 48.71 16.2213C47.4087 16.9291 46.2709 17.9146 45.2968 19.1779V15.8903H35.7991V39.2693H45.2968Z'
                fill='currentColor'
              />
              <path
                d='M64.2923 39.9999C65.7991 39.9999 67.2337 39.7906 68.5959 39.372C69.9582 38.9534 71.035 38.4626 71.8265 37.8994L68.7215 31.5067C68.4323 31.7046 68.0327 31.8834 67.5229 32.0432C67.013 32.203 66.4536 32.283 65.8448 32.283C64.8554 32.283 63.9955 32.0661 63.2649 31.6323C62.5343 31.1985 61.9749 30.6239 61.5868 29.9085C61.1986 29.1932 61.0046 28.4169 61.0046 27.5798C61.0046 26.91 61.1682 26.2099 61.4955 25.4793C61.8227 24.7487 62.3402 24.1323 63.048 23.63C63.7557 23.1277 64.6728 22.8766 65.7991 22.8766C66.9863 22.8766 67.9604 23.1353 68.7215 23.6528L71.8265 17.2601C71.0655 16.6817 69.9848 16.1871 68.5845 15.7761C67.1842 15.3651 65.7382 15.1597 64.2466 15.1597C62.344 15.1597 60.5822 15.5059 58.9612 16.1985C57.3402 16.891 55.9323 17.8271 54.7375 19.0067C53.5426 20.1863 52.6142 21.5181 51.9521 23.0021C51.29 24.4862 50.9589 26.0196 50.9589 27.6026C50.9589 29.2921 51.3128 30.8865 52.0206 32.3857C52.7283 33.8849 53.6986 35.2053 54.9315 36.3469C56.1644 37.4884 57.5837 38.3827 59.1895 39.0295C60.7953 39.6764 62.4962 39.9999 64.2923 39.9999Z'
                fill='currentColor'
              />
              <path
                d='M78.9955 39.2694V26.3927C78.9955 25.6012 79.1553 24.9163 79.4749 24.3379C79.7945 23.7595 80.2436 23.3105 80.8219 22.9909C81.4003 22.6712 82.07 22.5114 82.8311 22.5114C83.9878 22.5114 84.9163 22.8653 85.6165 23.5731C86.3166 24.2808 86.6667 25.2207 86.6667 26.3927V39.2694H96.1644V24.3379C96.1644 22.5875 95.7535 21.0236 94.9315 19.6461C94.1096 18.2686 92.9947 17.1766 91.5868 16.3699C90.1789 15.5632 88.5845 15.1598 86.8037 15.1598C85.4034 15.1598 84.0221 15.4148 82.6598 15.9247C81.2976 16.4346 80.0761 17.1537 78.9955 18.0822V0H69.4977V39.2694H78.9955Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </div>

        {/* LINKS */}
        <nav className='flex flex-col sm:flex-row gap-8 sm:gap-0 justify-evenly w-full items-center'>
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
      <Button>See our portfolio</Button>
    </footer>
  )
}

export default Footer
