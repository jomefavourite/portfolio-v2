import React from 'react';
import Articles from '../../../components/Articles';
import { Metadata } from 'next';

export const metaData: Metadata = {
  title: 'Favourite Jome - Articles',
};

function ArticlePage() {
  return <Articles />;
}

export default ArticlePage;
