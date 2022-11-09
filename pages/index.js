import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Boostr.id</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <h1>Kelola Banyak Akun Marketplace Dalam Satu Dashboard</h1>
        <p className="description">
          <a href="https://boostr.id">Boostr.id</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
