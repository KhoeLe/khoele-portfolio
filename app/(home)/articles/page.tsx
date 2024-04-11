import TitleHeader from '@/components/title-header'
import React from 'react'
import ArticleCard from '../_components/article-card'
import { getArticlesData } from '@/lib/data/articles-data'

async function ArticlesPage() {
  const articles = await getArticlesData()
  return (
    <div className='mx-auto px-4 min-h-screen sm:px-6 lg:px-8 max-w-2xl space-y-4' data-aos="fade-down" data-aos-duration="800">
      <TitleHeader title='Articles' description='All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.' />
      <ul >
        <li className='space-y-4'>
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </li>
      </ul>
    </div>
  )
}

export default ArticlesPage