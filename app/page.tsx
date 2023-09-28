//  ;

// import { useBlogPost } from "../hooks/useBlogPost";
// import getQueryClient from "../utils/getQueryClient";
// import { dehydrate } from "@tanstack/react-query";
import LandingPage from './LandingPage';

export const metadata = {
  title: 'Favourite Jome Portfolio',
  description: 'Favourite Jome portfolio page',
};

{
  /* <link rel='icon' href='/favicon.ico' />
<link
  rel='apple-touch-icon'
  sizes='180x180'
  href='/apple-touch-icon.png'
/>
<link
  rel='icon'
  type='image/png'
  sizes='32x32'
  href='/favicon-32x32.png'
/>
<link
  rel='icon'
  type='image/png'
  sizes='16x16'
  href='/favicon-16x16.png'
/> */
}

const Home = () => {
  // Calling this hook here, so the articles would be cache on the
  // index page, before moving to the articles page
  // useBlogPost("Favourite");
  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery(["hydrate-users"], getUsers);
  // const dehydratedState = dehydrate(queryClient);

  return (
    // <Hydrate state={dehydratedState}>
    <LandingPage />
    // </Hydrate>
  );
};

export default Home;
