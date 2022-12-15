import React from "react";
import { Layout } from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

const ProjectAll: NextPageWithLayout = () => {
  return <div>ProjectAll</div>;
};

ProjectAll.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default ProjectAll;
