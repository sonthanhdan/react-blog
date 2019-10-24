import React, { Component } from 'react'
// import {
//   View,
//   Link,
//   NotFoundBoundary,
//   useLoadingRoute,
// } from 'react-navi'
// import NotFoundPage from './NotFoundPage'
// import LoadingIndicator from './LoadingIndicator'
// import styles from './BlogLayout.module.css'

class BlogPostContent extends Component {
    constructor(props){
        super(props)
    }

    render(){
       
        return <div dangerouslySetInnerHTML={{ __html: this.props.content}} />
    }
}

BlogPostContent.defaultProps = {
    content: null
}


export default BlogPostContent;

