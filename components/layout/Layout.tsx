import { ReactNode } from 'react'
import { SEO, Header, Footer } from '.'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className='flex flex-col max-w-6xl mx-auto min-h-screen'>
      <SEO />
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
