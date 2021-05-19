import Link from '../Link'
import { PageName } from '@/types'

interface FooterProps {
  selected: PageName
}

export default function Footer(props: FooterProps) {
  return (
    <footer className="w-full h-auto shadow-md flex items-center justify-center transform rotate-180">
      <div className="w-full flex flex-col space-y-2 md:flex-row justify-around items-center transform rotate-180">
        <Link
          href="/"
          color="blue"
          name="home"
          selected={props.selected === 'home'}
        >
          <p className="text-2xl font-header">Home</p>
        </Link>
        <Link
          href="/about"
          color="yellow"
          name="contact"
          selected={props.selected === 'about'}
        >
          <p className="text-2xl font-header">About Me</p>
        </Link>
        <Link
          href="/experience"
          color="red"
          name="experience"
          selected={props.selected === 'experience'}
        >
          <p className="text-2xl font-header">Experience</p>
        </Link>
        <Link
          href="/projects"
          color="blue"
          name="projects"
          selected={props.selected === 'projects'}
        >
          <p className="text-2xl font-header">Projects</p>
        </Link>
      </div>
    </footer>
  )
}
