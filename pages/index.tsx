import { Layout } from '@/components'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '@/theme'

export default function Home() {
  return (
    <Layout title="Will Smith - Home" pageName="home">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="flex flex-col items-center justify-center flex-1 text-center space-y-5 h-full"
      >
        <h1 className="text-6xl font-header">
          Hi, I&apos;m <span className="shadow-red">Will.</span>
        </h1>
        <p className="text-2xl">
          I&apos;m a <span className="shadow-yellow">Software Engineer</span>{' '}
          from Birmingham, Alabama.
        </p>
      </motion.div>
    </Layout>
  )
}
