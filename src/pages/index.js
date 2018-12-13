import React from "react";

import Meta from "components/shared/Meta";
import Layout from "components/shared/Layout";
import Slider from "components/home/slider";
import Intro from "components/home/intro";
import InstagramFeed from "components/shared/Instafeed";
import { siteMetadata } from "../../gatsby-config";

const Index = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Home" />
      <Slider />
      <Intro />
      <InstagramFeed />
    </Layout>
  );
};

export default Index;
