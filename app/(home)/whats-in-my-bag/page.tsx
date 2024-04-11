import TitleHeader from '@/components/title-header'
import React from 'react'
import CategoriesTitle from './_components/categories-title'
import Card from './_components/card'
import { getBagData } from '@/lib/data/my-bag-data'

async function WhatIsMyBag() {

  const data = await getBagData()

  return (
    <div className='mx-auto min-h-screen px-4 sm:px-6 lg:px-8 max-w-2xl space-y-4' data-aos="fade-down" data-aos-duration="800">
      <TitleHeader title='WhatIsMyBag' description='Software I use, gadgets I love, and other things I recommend. Here’s a big list of all of my favorite stuff.' />

      <div className="space-y-24">
        <ul className="space-y-8">
          <CategoriesTitle title="Hardware" />
          {data.hardware.map((item) => (
            <Card item={item} key={item.name} />

          ))}
        </ul>
        <ul className="space-y-8">
          <CategoriesTitle title="Desk" />
          {data.desk.map((item) => (
            <Card item={item} key={item.name} />

          ))}
        </ul>
        <ul className="space-y-8">
          <CategoriesTitle title="Software" />
          {data.software.map((item) => (
            <Card item={item} key={item.name} />

          ))}
        </ul>
        <ul className="space-y-8">
          <CategoriesTitle title="Others" />
          {data.others.map((item) => (
            <Card item={item} key={item.name} />

          ))}
        </ul>

      </div>
    </div>
  )
}

export default WhatIsMyBag