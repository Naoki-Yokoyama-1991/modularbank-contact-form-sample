import React from 'react'
import { Info, Mail, Column } from './styles'

const Information = () => {
  return (
    <Column>
      <Info>
        <p>Media enquiries:</p>
        <Mail href="mailto:press@modularbank.co">
          press@modularbank.co <br />
        </Mail>
        <br />
        <p>Career questions:</p>
        <Mail href="careers@modularbank.co">
          press@modularbank.co <br />
        </Mail>
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
      </Info>
    </Column>
  )
}

export default Information
