import React from 'react'
import Intro from './_components/intro'
import SocialLink from './_components/social-links'
import FeatureProject from './_components/feature-project'
import FeaturedArticles from './_components/featured-articles'
import Newsletter from './_components/news-letter'
import { getIntroData } from '@/lib/data/info-data'



async function HomePage() {
  const introData = await getIntroData();

  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl space-y-4' data-aos="fade-down" data-aos-duration="800">
      {introData?.map((intro) => (
        <Intro key={intro.data.title} intro={intro.data} />
      ))}
      <SocialLink />
      <FeatureProject />
      <FeaturedArticles />
      <Newsletter />
    </div>
  );
}

export default HomePage