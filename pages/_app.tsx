import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextWrapper } from '../contexts/Context'
import { useEffect } from 'react'
import sal from 'sal.js'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    sal({ root: null, threshold: 0.2 })
  })

  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  )
}

export default MyApp
