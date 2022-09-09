import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Button = ({ children }: Props): JSX.Element => {
  return (
    <button className='px-8 py-6 bg-gray-900 hover:bg-gray-800 active:bg-gray-500 text-white font-bold flex items-center gap-6 group transition-colors'>
      <span>Button</span>
      <svg
        className='w-6 group-hover:translate-x-2 transition-transform'
        viewBox='0 0 24 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M15 1L24 10L15 19' stroke='white' stroke-width='2' />
        <path d='M0 10H24' stroke='white' stroke-width='2' />
      </svg>
    </button>
  )
}

export default Button
