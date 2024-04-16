import Image from 'next/image'
import React from 'react'

type IntroData = {
  title: string;
  description: string;
  company: string;
  description2: string;

}

type Props = {
  intro: IntroData;
}

function Intro({ intro }: Props) {

  return (
    <div className="space-y-6">
      <Image width={400} height={500} src="https://media.licdn.com/dms/image/D5603AQG9zk8WkIT7Lw/profile-displayphoto-shrink_200_200/0/1688215612128?e=1718236800&v=beta&t=USnTUj_DaamLBd7j3-7W8rqFGNcLKB7WzjWAmo-vdfo" alt="Louis Le"
        className="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      />
      <h1 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
        {intro.title}
      </h1>
      <p className="text-gray-900 dark:text-gray-400 ">
        {intro.description}
      </p>
      <p className="text-gray-900 dark:text-gray-400">
        By day, I&apos;m a Fullstack Developer at
        <a href="https://keppel.com" target="_blank" className="underline ml-2">{intro.company}</a>
        {intro.description2}
      </p>
    </div>
  )
}

export default Intro