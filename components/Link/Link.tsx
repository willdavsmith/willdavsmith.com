import React from 'react'
import NextLink from 'next/link'
import { Color } from '@/types'

interface LinkProps {
  href: string
  color: Color
  children: React.ReactNode
  selected?: boolean
  name: string
}

export default function Link(props: LinkProps) {
  const shadowClassName = 'shadow-' + props.color
  const hoverClassName = 'hover:' + shadowClassName

  return (
    <NextLink href={props.href}>
      <button
        type="button"
        name={props.name}
        aria-label={props.name}
        className={`transition duration-300 ease ${hoverClassName} focus:outline-none ${
          props.selected ? shadowClassName : ''
        }`}
      >
        {props.children}
      </button>
    </NextLink>
  )
}
