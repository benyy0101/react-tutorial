import '../styles/globals.css'
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
      // 343. New Meetup Page
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
