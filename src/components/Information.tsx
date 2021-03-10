import React from 'react'
// @Next.js Component
import Link from 'next/link'
import { NextComponentType } from 'next'
// @Styled-component
import { Content, Mail, Column, InfoTitle, Sidebar, Lato } from './styles'

// @Info-Component
const Information: NextComponentType = () => {
  return (
    <Column>
      <Content>
        <Sidebar>
          <InfoTitle>Contact us</InfoTitle>
        </Sidebar>
        <p>
          Media enquiries<Lato>:</Lato>
        </p>
        <Link href="mailto:press@modularbank.co" passHref>
          <Mail>
            press@modularbank.co <br />
          </Mail>
        </Link>
        <br />
        <p>
          Career questions<Lato>:</Lato>
        </p>
        <Link href="mailto:careers@modularbank.co" passHref>
          <Mail>
            careers@modularbank.co <br />
          </Mail>
        </Link>
        <br />
        <p>
          Our offices<Lato>:</Lato>
        </p>
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
