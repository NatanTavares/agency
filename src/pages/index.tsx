import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>React.jS + Next.js</h1>
        <p>Initial structure for projects developed with React.js + Next.js</p>
      </main>
    </Container>
  )
}

export default Home
