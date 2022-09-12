import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { useAppContext } from '../contexts/Context'
import { useWindowSize } from '../hooks/useWindowSize'
import { Hero } from '../components'
import Image from 'next/image'
import Link from 'next/link'

const About: NextPage = () => {
  const data = useAppContext()
  const { media } = useWindowSize()

  if (!data) return <div>Loading...</div>
  return (
    <Layout>
      <Hero
        pageName='about'
        heading='Your team of professionals'
        paragraph='Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.'
        imageSrc={`/assets/about/${media}/image-hero.jpg`}
      />
    </Layout>
  )
}

export default About
