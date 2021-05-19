import { Layout } from '@/components'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '@/theme'

export default function About() {
  return (
    <Layout title="Will Smith - About" pageName="about">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="flex flex-col items-center justify-center flex-1 text-center space-y-5 h-full p-8"
      >
        <div className="flex space-x-8 text-left">
          <div className="hidden lg:block shadow-2xl outline-gray p-2">
            <img src="/portrait.jpg" alt="me" />
          </div>
          <div className="flex flex-col space-y-2 justify-center p-2 max-w-screen-sm">
            <h1 className="text-6xl font-header">Hi!</h1>
            <p className="text-2xl">
              I&apos;m a software engineer who has worked on a variety of
              projects - from enterprise-scale Angular and React web apps to
              Raspberry Pi home upgrades.
            </p>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}
