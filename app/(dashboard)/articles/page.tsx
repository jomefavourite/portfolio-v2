import React from 'react';
import Articles from '../../../components/Articles';
import { Metadata } from 'next';

export const metaData: Metadata = {
  title: 'Favourite Jome - Articles',
};

function ArticlePage() {
  return (
    <>
      <p className='sr-only'>Hope this works. This is the Article page</p>
      <Articles />
    </>
  );
}

export default ArticlePage;
