import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js Page</title>
      </Head>
      <h1>My Next.js Page</h1>
      <p>This is a sample page for my Next.js application.</p >
      <Link href="/about">Learn more</Link>
    </>
  )
}