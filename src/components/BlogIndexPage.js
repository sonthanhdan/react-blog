import React from 'react'
import { Link } from 'react-navi'
// import siteMetadata from '../siteMetadata'
// import ArticleSummary from './ArticleSummary'
// import Bio from './Bio'
import Pagination from './Pagination'
import './BlogIndexPage.css'
import Footer from './Footer'
import NavBar from './Navbar'
import RecentPost from './RecentPost'
import GoTopButton from './GoTopButton'
import './base.styles.sass'


function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <>
      <NavBar/>
      <header>
        <h1 className="title">
          <Link href={blogRoot}>Latest stories</Link>
        </h1>
        {/* <Bio 
          className={styles.bio} 
          // readingTime={data.readingTime}
          // date={data.date}
          showMajor={false}
        /> */}
      </header>
      <RecentPost posts={postRoutes}/>
      {/* <ul className={styles.articlesList}>
        {postRoutes.map(route => (
          <li key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        ))}
      </ul> */}
      {pageCount > 1 && (
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
          prefix="page"
        />
      )}
      <footer className="footer">
        <div>
          <a href="/rss.xml" target="_blank" style={{ float: 'right' }}>
            EN
          </a>
          {/* <a href="/rss.xml" target="_blank" style={{ float: 'right' }}>
            RSS
          </a> */}
          <Link href="/about">About</Link> &bull; <Link href="/tags">Tags</Link>{' '}
          {/* &bull;{' '} */}
          {/* <a href="https://github.com/frontarm/create-react-blog">Source</a> */}
        </div>
      </footer>
      <GoTopButton
      />
      <Footer/>
    </>
  )
}

export default BlogIndexPage
