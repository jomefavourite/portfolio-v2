import React from "react";
import Articles from "./index";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Favourite Jome - Articles",
};

function ArticlePage() {
  return <Articles />;
}

export default ArticlePage;
