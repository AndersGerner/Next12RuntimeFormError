import '../styles/globals.css'
import { withNextRuntime } from 'next-runtime/app'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withNextRuntime(MyApp)
 