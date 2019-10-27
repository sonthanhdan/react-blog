import { join } from 'path'
import React from 'react'
import { Link } from 'react-navi'
import './Pagination.css'

function Pagination({ blogRoot, pageCount, pageNumber, prefix }) {
  return (
    <>
    {/* <small className={styles.Pagination}>
      {
        pageNumber !== 1 &&
        <Link
          className={styles.previous}
          href={join(blogRoot, prefix, String(pageNumber - 1))}>
          ← Previous
        </Link>
      }
      <span className={styles.pages}>
        {' '}Page <span className={styles.current}>{pageNumber}</span>/<span className={styles.count}>{pageCount}</span>{' '}
      </span>
      {
        pageNumber < pageCount &&
        <Link
          className={styles.next}
          href={join(blogRoot, prefix, String(pageNumber + 1))}>
          Next →
        </Link>
      }
    </small> */}
    <div className="paginationstyle__PaginationWrapper">
      <div className="paginationstyle__PrevPage" >
      {
        pageNumber !== 1 &&
        <a aria-label="Prev" href={join(blogRoot, prefix, String(pageNumber - 1))}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z" />
          </svg>
          {/* Previous */}
          {/* ← Previous */}
        </a>
      }
       
      </div>

      <div className="paginationstyle__PageNumber">Page {pageNumber} Of {pageCount}</div>
      
      <div className="paginationstyle__NextPage">
      {
        pageNumber < pageCount &&
        <a aria-label="Next" href={join(blogRoot, prefix, String(pageNumber + 1))}>
        {/* Next */}
        {/* Next → */}
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z" />
          </svg>
        </a>
      }
        
      </div>
    </div>
  </>
  
  )
}

export default Pagination