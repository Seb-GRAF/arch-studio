import { useState, useEffect } from 'react'

export interface Size {
  width: number | undefined
  height: number | undefined
  media: 'mobile' | 'tablet' | 'desktop'
}

export const useWindowSize = (): Size => {
  const mediaQueries = {
    tablet: 768,
    desktop: 1440,
  }

  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
    media: 'mobile',
  })

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        media:
          window.innerWidth <= mediaQueries.tablet
            ? 'mobile'
            : window.innerWidth <= mediaQueries.desktop
            ? 'tablet'
            : 'desktop',
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
