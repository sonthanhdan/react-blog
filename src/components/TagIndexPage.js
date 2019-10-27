import React from 'react'
import { Link } from 'react-navi'
import './TagIndexPage.css'
import Navbar from './Navbar'
import Footer from './Footer'

function TagIndexPage(props) {
  return (
    <>
    <Navbar/>
    <div className="TagIndexPage">
      <div class="TagHeading">
        <h1 class="TagHeadingName">Tags</h1>
        A collection of {props.tags.length} tag
      </div>
      <div class="tags are-medium">
        {props.tags.map(tag =>
          <span class="tag" >
              <Link href={tag.href} className="badge" data-badge={`(${tag.count})`}>
              {tag.name}
            </Link>
          </span>
        )}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default TagIndexPage