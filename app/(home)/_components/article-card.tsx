import Link from 'next/link'
import React from 'react'

interface Article {
  title: string;
  description: string;
  datePublished: string;
  url: string;
  id: string;
  contentHtml: string
}


interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {

  const getReadableDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  return (
    <div className='px-2 py-2'>
      <Link href={`/articles/${article.id}`} >

        <article className='group' >
          <time
            className="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5"
            dateTime={article.datePublished}
          >
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"></span>
            </span>
            {getReadableDate(article.datePublished)}
          </time>
          <h2
            className="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-teal-600"
          >
            {article.title}
          </h2>
          <p className="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
            {article.description}
          </p>
        </article>

      </Link>
    </div>
  )
}

export default ArticleCard


