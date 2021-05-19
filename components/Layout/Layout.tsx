import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Head from 'next/head'
import { PageName } from '@/types'

interface LayoutProps {
  children: React.ReactNode
  title: string
  pageName: PageName
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-col h-screen py-2">
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main className="flex-1 overflow-y-auto pt-16 pb-16">
        {props.children}
      </main>
      <Footer selected={props.pageName} />
    </div>
  )
}
