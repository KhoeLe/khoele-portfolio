import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import React from 'react'

export type Project = {
  id: number
  name: string
  description: string
  url: string
  thumbnail: string
}
function AppProjectCard({ project }: { project: Project }) {
  return (
    <Link
      key={project.id}
      className="flex items-end gap-4 group p-2 -m-2 rounded-lg "
      href={project.url}
      target="_blank"

    >
      <div className="max-w-sm">
        <h3 className="text-sm font-medium group-hover:text-teal-600">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
      </div>
      <div
        className="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
      >

      </div>
      <Avatar className='rounded z-10 relative'

      >
        <AvatarImage src={project.thumbnail} />
      </Avatar>
    </Link>
  )
}

export default AppProjectCard