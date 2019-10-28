import React from 'react'
import './Author.css'


function Author() {

    return (
        <div className="author_wrapper">
            <span className="author_content">
                <div className="author_content_avatar">
                    <a href="/about" rel="noopener">
                        <img alt="Zara Stone" className="author_content_avatar_img"
                             src="https://miro.medium.com/fit/c/80/80/1*eB3YZUUB6HQYkBFDvAhwhg.jpeg"
                             width={80}
                             height={80}/>
                    </a>
                </div>
                <span className="r">
                    <div className="author_content_written_by_wrapper">
                        <p className="author_content_written_by">Written by</p>
                    </div>
                    <div className="author_content_author_name_wrapper">
                        <div className="author_content_author_name_wrapper_inner">
                        <h2 className="author_name">
                            <a href="/about" className="author_name_link" rel="noopener">Zara Stone</a>
                        </h2>
                        <div className="author_content_follow_button">
                            <button className="button_follow">Follow</button>
                        </div>
                        </div>
                    </div>
                </span>
            </span>
            <div className="author_description_wraper">
                <div className="author_description_inner">
                    <h4 className="author_description">Like the simple thing</h4>
                </div>
            </div>
        </div>
    )
}

export default Author;