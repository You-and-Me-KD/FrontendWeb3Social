'use client'
import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'
import { VStack } from '../common'
import { Banner } from '../common'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <VStack className="mx-auto mt-30 w-296 max-w-full px-4 xl:px-0" justify="center" align="start">
        <Banner />
        {children}
      </VStack>
      <Footer />
    </React.Fragment>
  )
}
