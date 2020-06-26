import 'styles/global.css'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}