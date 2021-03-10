import React from 'react'
// @Next.js Component
import Head from 'next/head'
import { NextPage, GetStaticProps } from 'next'
// @NComponents-Information & Form
import Information from '../components/Information'
import Form from '../components/Form'
// @Styled-component
import { Container, Main } from '../styles/pages/Contact'
// @Form-Model-Select
import { DataType } from '../util/type'
// @Form-Select-Data-Json
import Industry from '../data/industry.json'
import Operating from '../data/operating.json'
import Country from '../data/country.json'

// @Contact-Page
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

// @Next.js StaticSiteGeneration
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      industry: Industry,
      operating: Operating,
      country: Country,
    },
  }
}
