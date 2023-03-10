import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';


const Home:NextPage = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify 2.0</title>
        <meta name="description" content="Spotify by KN DEV" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex'>
        <Sidebar />

        <Center />
      </main>
    </div>
  )
}
export default Home
