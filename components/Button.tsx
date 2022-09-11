import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href: string
}

const Button = ({ children, href }: Props): JSX.Element => {
  return (
    <Link href={href} passHref>
      <a className='px-8 py-6 bg-gray-900 hover:bg-gray-800 active:bg-gray-500 text-white font-bold flex items-center justify-center gap-6 group transition-colors'>
        <span className='whitespace-nowrap'>{children}</span>
        <img
          src='/assets/icons/icon-arrow.svg'
          alt=''
          className='group-hover:translate-x-2 transition-transform'
        />
      </a>
    </Link>
  )
}

export default Button
