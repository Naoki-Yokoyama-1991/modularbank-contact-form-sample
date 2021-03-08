import React from 'react'
import Head from 'next/head'
import { Container, MainContainer, Primary } from '../styles/pages/Contact'
import Information from '../components/contact/Information'
import Form from '../components/contact/Form'

const Contact: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Contact us</title>
      </Head>
      <MainContainer>
        <Information />
        <Form />
      </MainContainer>
    </Container>
  )
}

export default Contact
