import React from "react";
import { Layout } from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const AboutPage: NextPageWithLayout = () => {
  return <div>About</div>;
};

AboutPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default AboutPage;
