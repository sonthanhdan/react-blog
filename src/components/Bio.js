import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'
import { formatDate } from '../utils/formats'

function Bio({readingTime,date, showMajor= false}) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  let readingTimeElement;
  
  if (typeof readingTime == 'object') {
    let minutes = Math.max(Math.round(readingTime.minutes), 1)
    let cups = Math.round(minutes / 5);
    readingTimeElement =
      <React.Fragment>
        {' '}&bull;{' '}
        <span >
          {new Array(cups || 1).fill('☕️').join('')} {minutes} min read
        </span>
      </React.Fragment>
  }

  return (
    <div className="row post-top-meta">
        <div className="author-avatar">
        <a href="/about">
            <img className="author-thumb" src={photoURL} alt="DanSt" width="48" height="48"/>
        </a>
        </div>
        <div className="author-info">
        <div className="author-description">
            <a className="link-dark" href="/about">DanSt</a>
            <a href="/about" className="author-major">Developer</a>
        </div>
        {readingTime && date && (
          <div className="flex-post-date">
            <span className="post-date">
            <time dateTime={date.toUTCString()}>{formatDate(date)}</time>
            </span>
            <span className="post-read">{readingTimeElement || null}</span>
          </div>
        )}
        {showMajor && (<span className="author-major">Share my knowledge</span>)}
        </div>
    </div>
  )
}

export default Bio
