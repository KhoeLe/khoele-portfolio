import { Button } from '@/components/ui/button'
import React from 'react'
import ArticleCard from './article-card'
import Link from 'next/link'
import { getArticlesData } from '@/lib/data/articles-data'

async function FeaturedArticles() {

  const articles = await getArticlesData()

  return (
    <div>
      <h2 className="uppercase text-xs font-semibold text-gray-400 mb-6">
        RECENT ARTICLES
      </h2>
      <ul >
        <li className='space-y-4'>
          {articles.slice(0,3).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </li>
      </ul>
      <div className="flex items-center justify-center mt-6 text-sm">
        <Button
          variant={'outline'}
          className=""
        >
          <Link href="/articles">View all articles &rarr;</Link>
        </Button>
      </div>
    </div>
  )
}

export default FeaturedArticles