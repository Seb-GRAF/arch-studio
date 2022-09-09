import Head from 'next/head'

const SEO = (): JSX.Element => {
  return (
    <Head>
      <link
        rel='preload'
        href='/fonts/LeagueSpartan-VariableFont_wght.ttf'
        as='font'
        type='font/ttf'
        crossOrigin='anonymous'
      />
    </Head>
  )
}

export default SEO
