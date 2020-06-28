import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'

export default function Home() {
  const easing = [0.6, -0.05, 0.01, 0.99]
  const fadeInUp = {
    initial: {
      y:60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing
      }
    },
    hidden: { opacity: 0 },
  }
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  const slide = {
    initial: {
      x: 60,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing
      }
    }
  }
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head>
        <title>{'this is home.'}</title>
      </Head>
      <HomeSection variants={stagger} className={utilStyles.row}>
        <motion.article variants={fadeInUp} className='img-article'>
          <img className={utilStyles.circleImage} src="https://images.unsplash.com/photo-1552933529-e359b2477252?ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
        </motion.article>
        <motion.article variants={stagger} className='text-article'>
          <motion.h1 variants={slide}>This cat is..</motion.h1>
          <motion.p variants={slide}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nostrum beatae atque autem ullam quisquam suscipit distinctio culpa, alias consectetur dolores! Adipisci atque reiciendis laborum similique molestiae tempora repellendus nisi!
          </motion.p>
          <Link href="/events"><motion.a variants={slide}>go to events</motion.a></Link>
        </motion.article>
      </HomeSection>
    </motion.div>
  )
}

const HomeSection = styled(motion.section)`
  width: 100%;
  height: 100vh;

  >article {
    width: 50%;
    display: flex;
  }
  >.img-article {
    align-items: center;
    justify-content: center;
  }
  >.text-article {
    background: whitesmoke;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    >h1 {
      margin-bottom: 1rem;
    }

    >p {
      color: gray;
    }
  }
`;
