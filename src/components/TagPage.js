import React from 'react'
import './TagPage.css'
import NavBar from './Navbar'
import Footer from './Footer'
import Bio from './Bio'

function TagPage({ blogRoot, name, routes  }) {
  return (
    <>
      <NavBar/>
        <div className="tags--page">
          <div className="style_tag_heading">
            <div className="style_tag_clearfix">
              <div className="style_tag_heading_content">
                <div className="style_tag_heading_prefix">Tagged in</div>
                <h1 className="style_tag_heading_title">{name}</h1>
                A collection of {routes.length} post
              </div>
            </div>
          </div>
          <div className="columns is-multiline tag_list_article">
          {routes.map(route => 
            <div className="tag_list_article_item">
           
            <div className="tag_list_article_item_short">
              <a className href={route.url.href} >
                <div className="tag_list_article_item_short_content">
                  <section className="tag_list_article_item_short_content_section">
                    <div className="section-content">
                      <div className="section-inner sectionLayout--insetColumn">
                        <figure name="previewImage" id="previewImage" className="previewImage">
                        <img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/focal/800/240/42/28/1*FmvJpwDbiZVleJLGYInQMw.jpeg" src="https://cdn-images-1.medium.com/focal/800/240/42/28/1*FmvJpwDbiZVleJLGYInQMw.jpeg"
                        alt={route.title}
                        />
                        </figure>
                        <h3 className="tag_list_article_item_short_content_title">{route.title}</h3>
                        <h4 className="tag_list_article_item_short_content_subtitle">This decade is basically my 20s, defined by an era of&nbsp;songs
                        This decade is basically my 20s, defined by an era
                        </h4>
                      </div>
                    </div>
                  </section>
                </div>
              </a>
              
            </div>
            <Bio/>
            <div className="tag_list_article_item_read_more">
              <a href={route.url.href}>Read more →</a>
            </div>
          </div>
          )}
          </div>
        </div>
        
    <Footer/>
  </>
  )
}

export default TagPage