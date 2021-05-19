import '../styles/globals.css'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default App
