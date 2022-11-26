import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Layout } from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const Explore: NextPageWithLayout = () => {
  return (
    <>
      <h2 className='text-heading'>Explore</h2>
    </>
  );
};

Explore.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Explore;
