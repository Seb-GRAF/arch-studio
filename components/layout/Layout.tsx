import { ReactNode, useEffect, useState } from 'react'
import { SEO, Header, Footer } from '.'
import { useAppContext } from '../../contexts/Context'

interface Props {
  children: ReactNode
}

type DataType = {
  header: {
    nav: string[][]
  }
  footer: {
    nav: string[][]
    link: {
      name: string
      href: string
    }
  }
}

const Layout = ({ children }: Props): JSX.Element => {
  const data = useAppContext()

  if (!data) return <>Loading</>
  return (
    <div className='flex flex-col desktop:max-w-6xl mx-auto min-h-screen'>
      <SEO />
      <Header data={data.header} />
      <main className='flex-grow tablet:mx-[12vw] desktop:mx-0 mb-16 tablet:mb-48'>
        {children}
      </main>
      <Footer data={data.footer} />
    </div>
  )
}

export default Layout
