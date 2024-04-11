import React from 'react'
import AppProjectCard, { Project } from './project-card'
import { Button } from '@/components/ui/button'
import { fetchData } from '@/lib/data/project-data'
import Link from 'next/link'


async function FeatureProject() {

  const data = await fetchData()

  return (
    <div>
      <h2 className="uppercase text-xs font-semibold text-gray-400 mb-6">
        FEATURED PROJECTS
      </h2>
      <div className="space-y-4 ">
{data.slice(0, 3).map((project) => (
  <AppProjectCard
    key={project.id}
    project={project}
  />
))}
      </div>
      <div className="flex items-center justify-center mt-6 text-sm">
        <Button
        variant={'outline'}
          className=""
        >
          <Link href="/projects">View all projects &rarr;</Link>
        </Button>
      </div>
    </div>
  )
}

export default FeatureProject