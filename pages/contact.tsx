import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { useAppContext } from '../contexts/Context'
import { useWindowSize } from '../hooks/useWindowSize'
import { Hero } from '../components'
import Image from 'next/image'
import Link from 'next/link'

const Contact: NextPage = () => {
  const data = useAppContext()
  const { media } = useWindowSize()

  if (!data) return <div>Loading...</div>
  return (
    <Layout>
      <Hero
        pageName='contact'
        heading='Tell us about your project'
        paragraph='We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!'
        imageSrc={`/assets/contact/desktop/image-hero.jpg`}
      />
    </Layout>
  )
}

export default Contact
