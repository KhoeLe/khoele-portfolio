'use client'
import Link from 'next/link'
import React from 'react'

type Props = {
    name: string
    description: string
    url: string
}

type CardProps = {
  item: Props

}

function Card({ item }: CardProps) {
  return (
    <li>
    <Link href={item.url} className="group" target="_blank" >
      <p
        className="text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600"
      >
        { item.name }
      </p>
      <p className="text-sm text-gray-500">{ item.description }</p>
    </Link>
  </li>
  )
}

export default Card