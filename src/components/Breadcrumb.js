import React from 'react'
// import { Link } from 'react-navi'

function Breadcrumb({breadcrumbs }) {
  return <>
    {breadcrumbs && breadcrumbs.length ? (
        <nav className="breadcrumb is-centered is-medium" aria-label="breadcrumbs">
        <ul>
            <li><a href="/">Home</a></li>
            {breadcrumbs.map((breadcrumb,i) => (
                <li   key={i + `breadcrumb`}>
                    <a href={ breadcrumb.link} >{breadcrumb.name}</a>
                </li>
            ))}
        </ul>
        </nav>
    ) : null}
  </>
}

export default Breadcrumb