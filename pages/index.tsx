import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Favourite Jome Portfolio</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <style jsx global={false}>{`
        body {
          height: 100vh;
        }
      `}</style> */}

      <nav className='container py-3'>
        <div className='flex justify-between'>
          <Link href='/'>
            <h2>FavouriteJome.</h2>
          </Link>

          <button type='button' name='hamburger' className='space-y-1'>
            <span className='block h-[2px] w-5 bg-white'></span>
            <span className='block h-[2px] w-5 bg-white'></span>
            <span className='hidden'>Menu</span>
          </button>
        </div>
        <div></div>
      </nav>
      <main className='container text-center'>
        <Image
          src='/me.jpg'
          width={200}
          height={200}
          alt='Favourite Jome'
          style={{
            borderRadius: "50%",
            textAlign: "center",
            margin: "0 auto",
          }}
        />

        <h1 className='text-3xl font-bold md:text-4xl'>
          Hi, I am Favourite Jome
        </h1>
        <p className='mx-auto max-w-[500px]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit culpa
          dolorum hic, ratione asperiores doloribus officiis unde similique?
          Minus, porro?
        </p>

        <Link
          href='/explore'
          className='rounded-md bg-[#2f2f2f] p-2 text-white'
        >
          Explore
        </Link>
      </main>
      <footer className='container mb-0 text-center'>
        <p>
          Inspired by <a href='https://www.kingslee.me/'>kingslee.me</a> |{" "}
          <a href='https://kadet.dev/'>kadet.dev</a> |{" "}
          <a href='https://www.sarahdayan.dev/'>sarahdayan.dev</a>
        </p>
      </footer>
    </>
  );
}
