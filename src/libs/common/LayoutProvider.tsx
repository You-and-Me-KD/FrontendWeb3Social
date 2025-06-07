'use client'

import { FCC } from '@/types'
import React, { memo } from 'react'
import { Toaster } from 'sonner'

const LayoutProvider: FCC = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          classNames: {
            default: '!w-82 !bg-main-1 !rounded-xl gap-0 p-0 !shadow-main-1',
          },
        }}
      />
    </React.Fragment>
  )
}

export default memo(LayoutProvider)
