import TitleHeader from '@/components/title-header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getBookmarkData } from '@/lib/data/bookmark-data'
import Link from 'next/link'
import React from 'react'

async function BookmarkPage() {
  const bookmarks = await getBookmarkData()
  const getHost =(url:string) => {
    const parsedUrl = new URL(url);
    let host = parsedUrl.host;
    if (host.startsWith("www.")) {
      host = host.substring(4);
    }
    return host;
  }
  
  const getThumbnail =(url:string) => {
    const host = getHost(url);
    return `https://logo.clearbit.com/${host}`;
  }
  return (
    <div className='mx-auto min-h-screen px-4 sm:px-6 lg:px-8 max-w-2xl space-y-4' data-aos="fade-down" data-aos-duration="800">
      <TitleHeader title='BookmarkPage' description="Awesome things I've found on the internet. This page is still WIP, I want to add search like bmrks.com" />
      <ul className="space-y-2">
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id}>
          <Link
            href={bookmark.url}
            target="_blank"
            className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
          >
            <Avatar>
              <AvatarImage
                src={getThumbnail(bookmark.url)}
                alt={bookmark.label}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
    
            <p className="truncate text-gray-700 dark:text-gray-200">
              {bookmark.label}
            </p>
            <span className="flex-1"></span>
            <span className="text-xs font-medium text-gray-400 dark:text-gray-600">
              {  getHost(bookmark.url)}
            </span>
          </Link>
        </li>
        ))}
        
      </ul>
    </div>
  )
}

export default BookmarkPage