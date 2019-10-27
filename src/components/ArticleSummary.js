import React from 'react'
import { Link } from 'react-navi'
import ArticleMeta from './ArticleMeta'
import styles from './ArticleSummary.module.css'

function ArticleSummary({ blogRoot, route }) {
  return (

    <article className={styles.ArticleSummary}>
      <h2><Link href={route.url.href}>{route.title}</Link></h2>
      <ArticleMeta blogRoot={blogRoot} meta={route.data} />
      <p>{route.data.spoiler}</p>
      {/* <header className="style_article_heading">
        <div className="style_article_clearfix">
          <div className="style_article_heading_content">
            <div className="style_article_heading_prefix">Tagged in</div>
            <h1 className="style_article_heading_title">Culture</h1>
          </div>
        </div>
      </header> */}
    </article>
  )
}

export default ArticleSummary