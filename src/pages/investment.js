import React from 'react'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import PricingTable from 'components/investment/pricingtable'
import Banner from 'components/investment/banner'
import { siteMetadata } from '../../gatsby-config'

const Investment = ({ location }) => {
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Investment" />
      <PricingTable />
      <Banner />
    </Layout>
  )
}

export default Investment
