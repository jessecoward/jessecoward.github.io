import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>your name</title>
      </Head>
      <h1>jie Page</h1>
      <p>This is a sample page for your name</p >
      <Link href="/about">About</Link>
    </>
  )
}