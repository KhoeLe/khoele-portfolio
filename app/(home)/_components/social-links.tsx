import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

const links = [

  {
    name: "GitHub",
    url: "https://github.com/KhoeLe",
    icon: Github ,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/khoe-le-1b31a4203/",
    icon: Linkedin ,
  },

];

function SocialLink() {
  return (
    <div>
    <h2 className="uppercase text-xs font-semibold text-gray-400 mb-4">FIND ME ON</h2>
    <div className="space-y-5">
      {links.map(link => (
        <Link
        href={link.url}
        key={link.name}
        target="_blank"
        className="flex items-end gap-4 dark:hover:text-gray-300 group"
      >
        <span className="text-sm">
          {link.name}
        </span>
        <div
          className="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        ></div>
        <link.icon className='w-6 h-6' />
      </Link>
      ))}
    </div>
  </div>
  )
}

export default SocialLink