import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
import { useState, useEffect } from 'react'

const ArchiveIndex = props => {
  const { category } = props
  const [filteredPosts, setFilteredPosts] = useState(props.posts)

  useEffect(() => {
    // 根据路由参数过滤文章
    if (category?.[0]) {
      const filtered = props.posts.filter(post =>
        post.category?.includes(category[0])
      )
      setFilteredPosts(filtered)
    } else {
      setFilteredPosts(props.posts)
    }
  }, [category, props.posts])

  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return (
    <DynamicLayout
      theme={theme}
      layoutName='LayoutArchive'
      {...props}
      posts={filteredPosts}
    />
  )
}

export async function getStaticProps({ params }) {
  const props = await getGlobalData({ from: 'archive-index' })
  props.posts = props.allPages?.filter(
    page => page.type === 'Post' && page.status === 'Published'
  )
  props.category = params?.category || []
  delete props.allPages

  return {
    props,
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const props = await getGlobalData({ from: 'archive-index' })
  const posts = props.allPages?.filter(
    page => page.type === 'Post' && page.status === 'Published'
  )
  const categories = new Set()

  for (const post of posts) {
    if (post.category) {
      const cats = Array.isArray(post.category)
        ? post.category
        : [post.category]
      for (const cat of cats) {
        categories.add(cat)
      }
    }
  }

  const paths = Array.from(categories).map(category => ({
    params: { category: [category] }
  }))

  paths.push({ params: { category: [] } })

  return {
    paths,
    fallback: false
  }
}

export default ArchiveIndex
