"use client"
import MarkdownPreview from '@uiw/react-markdown-preview'
import { useTheme } from 'next-themes'
import React from 'react'

type Props ={
  postData: any

}

function MarkdownPreview_({ postData }: Props) {

  const theme = useTheme()

  console.log(theme.resolvedTheme)

  return (
    <MarkdownPreview 
      className='text-gray-900 dark:text-gray-400 '
      source={postData.contentHtml}
      style={{ padding: 16, 
        backgroundColor: theme.resolvedTheme === 'light' ? '#f9fafb' : '#000000' 
        }}
				// @ts-ignore
      rehypeRewrite={(node: { tagName: string }, _index: any, parent: { tagName: string; children: string | any[] }) => {
        if (node.tagName === "a" && parent && /^h(1|2|3|4|5|6)/.test(parent.tagName)) {
          parent.children = parent.children.slice(1)
        }
      }}
    />
  )
}

export default MarkdownPreview_