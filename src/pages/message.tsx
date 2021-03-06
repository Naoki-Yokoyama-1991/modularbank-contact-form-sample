import React from 'react'
// Next.jsComponent
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
// Styled-component
import { Main, Title, Text, Lato } from '../styles/pages/Message'

// MessageSuccessPage
const Success: NextPage = () => {
  // NextRouter
  const router = useRouter()
  // Transition to contact page after 3 seconds.
  setTimeout(function () {
    router.push('/')
  }, 3000)

  return (
    <>
      <Head>
        <title>Success</title>
      </Head>
      <Main>
        <div>
          <Title>
            All good<Lato>!</Lato>
          </Title>
          <Text>Thank you for your interest. We will contact you in 1-2 working days.</Text>
        </div>
      </Main>
    </>
  )
}

export default Success
