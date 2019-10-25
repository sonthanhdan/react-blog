import React from 'react'
import { Link, useCurrentRoute, useView } from 'react-navi'
import { MDXProvider } from '@mdx-js/react'
import siteMetadata from '../siteMetadata'
import ArticleMeta from './ArticleMeta'
import Bio from './Bio'
import Tags from './Tags'
import Breadcrumb from './Breadcrumb'

import styles from './BlogPostLayout.module.css'
import { formatDate } from '../utils/formats'
function BlogPostLayout({ blogRoot }) {
  let { title, data, url } = useCurrentRoute()
  let { connect, content, head } = useView()
  let { type: BlogPostContent } = content;

  // The content for posts is an MDX component, so we'll need
  // to use <MDXProvider> to ensure that links are rendered
  // with <Link>, and thus use pushState.
  return connect(
    <>
      {head}
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <Link href={url.pathname}>{title}</Link>
          </h1>
          <ArticleMeta
            blogRoot={blogRoot}
            meta={data}
            readingTime={data.readingTime}
          />
        </header>
        <Breadcrumb breadcrumbs={['Blog',`${title}`]}/>
        <MDXProvider components={{
          a: Link,
          wrapper: ({ children }) =>
            <div className={styles.content}>
              {children}
            </div>
        }}>
        
        <div className="row post-top-meta">
            <div className="author-avatar">
            <a href="/about">
                <img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal" width="48" height="48"/>
            </a>
            </div>
            <div className="author-info">
            <div className="author-description">
                <a className="link-dark" href="/about">Dan St</a>
                <a href="/about" className="author-major">Developer</a>
            </div>
            {/* <span className="author-major"></span> */}
            <div className="flex-post-date">
                <span className="post-date">22 July 2017</span>
                <span className="dot">·</span>
                <span className="post-read">6 min read</span>
            </div>
            </div>
        </div>
        <Bio 
          className={styles.bio} 
          readingTime={data.readingTime}
          date={data.date}
          showMajor={false}
        />
        <BlogPostContent content={data.content} />
        </MDXProvider>
        {/* Tags */}
        <Tags tags={data.tags}/>
        <footer className={styles.footer}>
          <h3 className={styles.title}>
            <Link href={blogRoot}>
              {siteMetadata.title}
            </Link>
          </h3>
          <Bio className={styles.bio} />
          <section className={styles.links}>
            {
              data.previousDetails &&
              <Link className={styles.previous} href={data.previousDetails.href}>
                ← {data.previousDetails.title}
              </Link>
            }
            {
              data.nextDetails &&
              <Link className={styles.next} href={data.nextDetails.href}>
                {data.nextDetails.title} →
              </Link>
            }
          </section>
        </footer>
      </article>
    </>
  )
}

export default BlogPostLayout