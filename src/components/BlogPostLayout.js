import React from 'react'
import { Link, useCurrentRoute, useView } from 'react-navi'
import { MDXProvider } from '@mdx-js/react'
// import siteMetadata from '../siteMetadata'
// import ArticleMeta from './ArticleMeta'
import Bio from './Bio'
import Tags from './Tags'
import Breadcrumb from './Breadcrumb'
import NavBar from './Navbar';
import Footer from './Footer'
import GoTopButton from './GoTopButton'
import styles from './BlogPostLayout.module.css'
import Story from './Story'
import Author from './Author'
// import { formatDate } from '../utils/formats'
function BlogPostLayout({ blogRoot }) {
  let { title, data, url } = useCurrentRoute()
  let { connect, content, head } = useView()
  let { type: BlogPostContent } = content;



  // The content for posts is an MDX component, so we'll need
  // to use <MDXProvider> to ensure that links are rendered
  // with <Link>, and thus use pushState.
  return connect(
    <>
      <NavBar/>
      {head}
      <Breadcrumb breadcrumbs={[
        {
          name: 'Blog',
          link: '/stories'
        },
        {
          name: `${title}`,
          link: url.pathname
        },
    
        ]}/>
      <article className={styles.container}>
        <header className={styles.header}>
        
          <h1 className={styles.title}>
            <Link href={url.pathname}>{title}</Link>
          </h1>
          {/* <ArticleMeta
            blogRoot={blogRoot}
            meta={data}
            readingTime={data.readingTime}
          /> */}
          <Bio 
          className={styles.bio} 
          readingTime={data.readingTime}
          date={data.date}
          showMajor={false}
        />
        </header>
       
        <MDXProvider components={{
          a: Link,
          wrapper: ({ children }) =>
            <div className={styles.content}>
              {children}
            </div>
        }}>
        
        
        <BlogPostContent content={data.content} />
        </MDXProvider>
        {/* Tags */}
        <Tags tags={data.tags}/>
        <hr/>
        <Author/>
     {/* <footer className={styles.footer}> */}
        <hr/>
         
   
          {/* <h3 className={styles.title}>
            <Link href={blogRoot}>
              {siteMetadata.title}
            </Link>
          </h3> */}
        
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
          {/* <hr/>
          <Bio 
          className={styles.bio} 
          readingTime={data.readingTime}
          date={data.date}
          showMajor={false}
        /> */}
        
        {/* </footer> */}
       
      </article>
      <Story/>
      <GoTopButton
      />
      <Footer/>
    </>
  )
}

export default BlogPostLayout