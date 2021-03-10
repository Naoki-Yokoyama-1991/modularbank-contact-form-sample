import React from 'react'
// @Next.js Component
import Link from 'next/link'
import { NextComponentType } from 'next'
// @Styled-component
import { Content, Mail, Column, InfoTitle, Sidebar, Lato2 } from './styles'

// @Info-Component
const Information: NextComponentType = () => {
  return (
    <Column>
      <Content>
        <Sidebar>
          <InfoTitle>Contact us</InfoTitle>
        </Sidebar>
        <p>Media enquiries:</p>
        <Link href="mailto:press@modularbank.co" passHref>
          <Mail>
            press<Lato2>@</Lato2>modularbank.co <br />
          </Mail>
        </Link>
        <br />
        <p>Career questions:</p>
        <Link href="mailto:careers@modularbank.co" passHref>
          <Mail>
            careers<Lato2>@</Lato2>modularbank.co <br />
          </Mail>
        </Link>
        <br />
        <p>Our offices:</p>
        <p>Tallinn, Estonia</p>
        <p>Vabaduse Workland</p>
        <p>Pärnu mnt 12, 10146</p>
        <br />
        <p>Berlin, Germany</p>
        <p>Bikini Berlin, Scaling Spaces, 2.OG</p>
        <p>Budapester Str. 46</p>
        <p>10787 Berlin</p>
      </Content>
    </Column>
  )
}

export default Information
