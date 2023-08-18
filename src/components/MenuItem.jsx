import React from 'react'
import Link from 'next/link'

export default function MenuItem(props) { 
  return (
    <div>
      <Link href={props.address} className='flex mx-4 lg:mx-6 '>
        <props.Icon className="text-2xl sm:hidden"/>
        <p className='hidden sm:inline'>{props.title}</p> 
      </Link>
    </div>
  )
}
