import { FaGithub } from 'react-icons/fa'
import { Color } from '@/types'
import Link from '../Link'
import GithubLanguages from 'react-github-languages'

interface ProjectCardProps {
  title: string
  description: string
  repository: string
  color: Color
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="lg:w-2/5 sm:w-4/5 min-w-min m-10 flex flex-col justify-between space-y-2 p-8 relative outline-gray">
      <div className="space-y-2">
        <p className="text-5xl font-header text-left">
          <Link
            href={`https://github.com/${props.repository}`}
            color={props.color}
            name={props.repository}
          >
            {props.title}
          </Link>
        </p>
        <p>{props.description}</p>
      </div>
      <div className="flex justify-between">
        <GithubLanguages width={300} repository={props.repository} />
        <div className="hidden sm:flex flex-col justify-end">
          <Link
            href={`https://github.com/${props.repository}`}
            color={props.color}
            name={props.repository}
          >
            <FaGithub size={50} name={props.repository} />
          </Link>
        </div>
      </div>
    </div>
  )
}
