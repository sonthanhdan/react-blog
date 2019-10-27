import React, { Component } from 'react'

class BlogPostContent extends Component {
    render(){
        return <div dangerouslySetInnerHTML={{ __html: this.props.content}} />
    }
}

BlogPostContent.defaultProps = {
    content: null
}

export default BlogPostContent;

