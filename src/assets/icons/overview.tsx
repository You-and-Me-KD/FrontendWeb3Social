import React from 'react'

export const OverviewIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="20"
      height="20"
      version="1.1"
      viewBox="0 0 20 20"
      fill="#616a82"
      {...props}
    >
      <path d="M18,8v10h-2V8H18 M18,6h-2c-1.104,0-2,0.896-2,2v10c0,1.104,0.896,2,2,2h2c1.104,0,2-0.896,2-2V8C20,6.896,19.104,6,18,6L18,6z"></path>
      <path d="M11,2v16H9V2H11 M11,0H9C7.896,0,7,0.896,7,2v16c0,1.104,0.896,2,2,2h2c1.104,0,2-0.896,2-2V2C13,0.896,12.104,0,11,0L11,0z"></path>
      <path d="M4,14v4H2v-4H4 M4,12H2c-1.104,0-2,0.896-2,2v4c0,1.104,0.896,2,2,2h2c1.104,0,2-0.896,2-2v-4C6,12.896,5.104,12,4,12L4,12z"></path>
    </svg>
  )
}
