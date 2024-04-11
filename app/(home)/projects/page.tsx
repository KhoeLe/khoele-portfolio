import TitleHeader from '@/components/title-header'
import { fetchData } from '@/lib/data/project-data'
import React from 'react'
import AppProjectCard from '../_components/project-card'

async function ProjectPage() {
  const data = await fetchData()

  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl space-y-4' data-aos="fade-down" data-aos-duration="800">
      <TitleHeader title='Project' description='I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.' />

      <div className="space-y-4 ">
        {data.map((project) => (
          <AppProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage