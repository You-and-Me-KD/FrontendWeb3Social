import React from 'react'

export const FriendIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="20"
      height="20"
      version="1.1"
      viewBox="0 0 20 20"
      fill="#9b7dff"
      {...props}
    >
      <path
        d="M10,0C4.477,0,0,4.478,0,10c0,5.523,4.477,10,10,10c5.522,0,10-4.477,10-10C20,4.478,15.522,0,10,0z M10,18c-4.418,0-8-3.582-8-8c0-4.418,3.582-8,8-8s8,3.582,8,8
        C18,14.418,14.418,18,10,18z M10,13c-1.305,0-2.403-0.838-2.816-2H5.101c0.464,2.282,2.48,4,4.899,4s4.436-1.718,4.899-4h-2.083C12.403,12.162,11.305,13,10,13z M7,7H5v2h2V7z M13,9h2V7h-2V9z"
      ></path>
    </svg>
  )
}
