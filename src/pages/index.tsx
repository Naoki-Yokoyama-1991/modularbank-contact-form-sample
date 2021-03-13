import React from 'react'
// Next.jsComponent
import Head from 'next/head'
import { NextPage, GetStaticProps } from 'next'
// ComponentsInformation&Form
import Information from '../components/Information'
import Form from '../components/Form'
// Styled-component
import { Container, Main } from '../styles/pages/Contact'
// FormModelSelect
import { DataType } from '../util/type'
// FormSelectDataJson
import Industry from '../data/industry.json'
import Operating from '../data/operating.json'
import Country from '../data/country.json'

// Contact-Page
const ContactUs: NextPage<DataType> = (prop: DataType) => {
  return (
    <Container>
      <Head>
        <title>Contact us</title>
      </Head>
      <Main>
        <Information />
        <Form data={prop} />
      </Main>
    </Container>
  )
}

export default ContactUs

// Next.jsStaticSiteGeneration
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      industry: Industry,
      operating: Operating,
      country: Country,
    },
  }
}
