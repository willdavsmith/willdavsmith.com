import { Color } from '@/types'
import { PropsWithChildren } from 'react'

interface ExperienceCardProps {
  title: string
  subtitle: string
  imageUrl: string
  color: Color
}

export default function ExperienceCard(
  props: PropsWithChildren<ExperienceCardProps>
) {
  const shadowClassName = 'shadow-' + props.color

  return (
    <div className="xs:w-full md:w-3/5 mt-10 mb-10 ml-2 mr-2 flex flex-row space-y-2 p-8 relative items-center outline-gray">
      <div className="hidden lg:w-1/5 lg:flex">
        <div>
          <img
            src={props.imageUrl}
            alt={`${props.title} header`}
            width="200"
            height="200"
          />
        </div>
      </div>
      <div className="xs:w-full lg:w-4/5 lg:pl-8 flex flex-col text-left">
        <div className="flex">
          <p className={`text-4xl ${shadowClassName} font-header`}>
            {props.title}
          </p>
        </div>
        <p className="text-2xl">{props.subtitle}</p>
        <br />
        <div className="min-w-full">{props.children}</div>
      </div>
    </div>
  )
}
