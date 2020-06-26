import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Head>
        <title>{'this is home.'}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          hello this is home page.
        </p>
        <Link href="/events"><a>go to events</a></Link>
      </section>
    </motion.div>
  )
}
