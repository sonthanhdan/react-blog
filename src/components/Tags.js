import React from 'react'
import { Link } from 'react-navi'
import { kebabCase } from 'lodash'
function Tags({ tags }) {
  return <>
    {tags && tags.length ? (
        <div style={{ marginTop: `4rem` }}>
            <h4>Tags</h4>
            <div className="tags">
                {tags.map(tag => (
                    <span className="tag has-text-black" key={tag + `tag`}>
                        <Link className="tag-word" href={`/tags/${kebabCase(tag)}/`} >
                        {tag}
                        </Link>
                    </span>
                ))}
            </div>
        </div>
    ) : null}
  </>
}

export default Tags