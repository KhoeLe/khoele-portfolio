import { getArticleData } from '@/lib/data/articles-data'
import React from 'react'
import MarkdownPreview_ from './_components/markdown-preview'


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const postData = await getArticleData(slug)
  return {
    title: postData?.title,
    authors: {
      name: "LouisLe",
    },
    openGraph: {
      title: postData?.title,
      url: "https://khoele-portfolio.vercel.app/articles/" + slug,
      siteName: "My Portfolio",
      images: postData?.contentHtml?.match(/!\[.*?\]\((.*?)\)/g)?.map((img) => img.match(/\((.*?)\)/)?.[1]) || [],
      type: "website",
    },
    keywords: ["daily web coding", "LouisLe", "dailywebcoding", "Daily Blog","My Portfolio"],
  };
}

async function ArticleDetails({ params }: { params: { slug: string } }) {

  const { slug } = params

  const postData = await getArticleData(slug)
  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl space-y-4' data-aos="fade-down" data-aos-duration="800">
      <div className='prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg'>
        <article >
          <h1 className='font-bold text-2xl my-2'>{postData.title}</h1>
          <MarkdownPreview_ postData={postData} />
        </article>
      </div>
    </div>
  )
}

export default ArticleDetails