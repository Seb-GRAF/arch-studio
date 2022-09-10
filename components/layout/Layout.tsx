import { ReactNode, useEffect, useState } from 'react'
import { SEO, Header, Footer } from '.'
import useSWR from 'swr'

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

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Layout = ({ children }: Props): JSX.Element => {
  const { data, error } = useSWR('/api/staticdata', fetcher)
  const [parsedData, setParsedData] = useState<DataType>()

  useEffect(() => {
    if (data) {
      setParsedData(JSON.parse(data))
    }
  }, [data])

  if (error) return <div>Failed to load</div>
  if (!parsedData) return <div>Loading...</div>
  return (
    <div className='flex flex-col xl:max-w-6xl mx-auto min-h-screen'>
      <SEO />
      <Header data={parsedData.header} />
      <main className='flex-grow sm:mx-24 xl:mx-0 mb-16 sm:mb-48'>
        {children}
      </main>
      <Footer data={parsedData.footer} />
    </div>
  )
}

export default Layout
