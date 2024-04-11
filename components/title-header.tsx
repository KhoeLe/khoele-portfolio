import React from 'react'
import { TypewriterEffect } from './typewriter-effect'

type Props = {
  title: string,
  description: string

}

function TitleHeader({ title, description }: Props) {
  return (
    <div>
      <h1
        className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
      >
        <TypewriterEffect words={[{text: title, className:'text-teal-500 dark:text-teal-500'}]} />
      </h1>
      <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}

export default TitleHeader