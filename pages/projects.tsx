import { ProjectCard, Layout } from '@/components'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '@/theme'

export default function Projects() {
  return (
    <Layout title="Will Smith - Projects" pageName="projects">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="flex overflow-y-auto flex-row flex-wrap w-full justify-evenly">
          <ProjectCard
            title="Magic Mirror"
            description="A web application that shows date, time, weather, and news data for use in a Raspberry Pi 'magic mirror' project. Builds are created with Docker and managed on the Pi with Watchtower."
            color="red"
            repository="willdavsmith/magic-mirror"
          />
          <ProjectCard
            title="React Github Languages"
            description="A React component to display a repository's used languages. (demo below!)"
            color="blue"
            repository="willdavsmith/react-github-languages"
          />
          <ProjectCard
            title="rgc"
            description="React-Generate-Component - A CLI tool to quickly generate a new React component."
            color="yellow"
            repository="willdavsmith/rgc"
          />
          <ProjectCard
            title="Gymfolio"
            description="A way to store, customize, and view personal gym data."
            color="red"
            repository="willdavsmith/Gymfolio"
          />
          <ProjectCard
            title="rpi-led-web"
            description="Node webserver and frontend that controls LEDs attached to a Raspberry Pi."
            color="blue"
            repository="willdavsmith/rpi-led-web"
          />
          <ProjectCard
            title="IOTA Seed Generator"
            description="A seed generator for IOTA wallets."
            color="yellow"
            repository="willdavsmith/iotaseedgenerator"
          />
          <ProjectCard
            title="Godo (WIP)"
            description="A command-line task tracker."
            color="red"
            repository="willdavsmith/godo"
          />
          <ProjectCard
            title="Makerplace (WIP)"
            description="A marketplace for viewing, uploading, and downloading 3D printer object files."
            color="blue"
            repository="willdavsmith/Makerplace"
          />
        </div>
      </motion.div>
    </Layout>
  )
}
