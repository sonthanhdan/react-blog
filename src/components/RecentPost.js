import React from 'react';
import { Link } from 'react-navi'

function RecentPost({posts}){

    return (
        <div className="columns is-multiline">
            
        {posts &&
          posts.map((post,index) => (
          <div className="card-h" key={index}>
            <div className="card-content-h">
              <div className="card-content-post-date card-content-left-image">
                  24
                  <span>May</span>
                </div>
                {/* <div className="card-content-left-image">
                  <a href="/doc-for-react-project/"></a>
                  <div className="card-image-h">
                    <picture>
                      <source />
                      <source />
                      <img
                        src="/img/preview.jpg"
                        alt="post preview"
                      />
                    </picture>
                    <noscript></noscript>
                  </div> */}
                {/* </div> */}
              {/* </div> */}
              <div className="card-content-right">
                <div className="card-tags">
                {post.data.tags &&
                    post.data.tags.map((tag,index) => (
                        <a key={index} href={`/tags/${tag}`}>#{tag}</a>
                    ))}
                {/* {post.frontmatter.tags && post.frontmatter.tags.map(tag => (
                               // <span className="tag has-text-black" key={tag + `tag`}>
                                   <Link to={`/tags/${kebabCase(tag)}/`} >
                                   {tag}
                                   </Link>
                               // </span>
                            ))} */}
                  {/* <a href="/tags/markdown/">#blog</a>
                  <a href="/tags/markdown/">#markdown</a> */}
                </div>
                <h2 className="card-title-h">
                  <Link
                    className="title has-text-primary is-size-4"
                    href={post.url.href}
                  >
                    {post.title}
                  </Link>
  
                </h2>
                <p className="card-description-h">
                {post.data.description.substr(0,100)}
                </p>
                <div className="btn-readmore">
                <Link href={post.url.href}>
                  Keep Reading →
                </Link>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      )
}

export default RecentPost