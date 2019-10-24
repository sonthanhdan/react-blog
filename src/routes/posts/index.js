import importAll from 'import-all.macro'
import * as Navi from 'navi'
import { join } from 'path'
import { sortBy } from 'lodash'
import slugify from 'slugify'
import BlogPostContent from '../../components/BlogPostContent'
// Get a list of all posts, that will not be loaded until the user
// requests them.
const postModules = importAll.deferred('./**/post.js')
const importPost = pathname => postModules[pathname]()
const postPathnames = Object.keys(postModules)

const arrayPost = [
  "2019-01-05-welcome",
  "2019-01-05-welcome-1",
  "2019-01-05-welcome-2",
  "2019-01-05-welcome-3",
  "2019-01-05-welcome-4",
  "2019-01-05-welcome-5",
  "2019-01-05-welcome-6",
  "2019-01-05-welcome-7"
]
const datePattern = /^((\d{1,4})-(\d{1,4})-(\d{1,4}))[/-]/

let postDetails = arrayPost.map(post_url => {
  let slug = slugify(
    post_url.replace(/(\d)\/(\d)/, '$1-$2'),
  )
    .replace(/^[-.]+|[.-]+$/g, '')
    .replace(datePattern, '$1/')

  let date
  let dateMatch = slug.match(datePattern)
  if (dateMatch) {
    date = new Date(dateMatch[2], parseInt(dateMatch[3]) - 1, dateMatch[4])
  }

  return {
    slug,
    post_url,
    date,
  }
})

// Sort the pages by slug (which contain the dates)
postDetails = sortBy(postDetails, ['slug']).reverse()

// Create url-friendly slugs from post pathnames, and a `getPage()` function
// that can be used to load and return the post's Page object.
let posts = postDetails.map(({ slug, pathname, date }, i) => ({
  getPage: Navi.map(async () => {

 
    let previousSlug, previousPost, nextSlug, nextPost
    let postData = {
      title: "Congratulations on Your New Blog!", 
      tags: ["react", "navi"], 
      content: "Learn how to add new posts and tweak the theme to your liking.",
      readingTime : {text: "2 min read", minutes: 2, time: 113700, words: 379},

    }
  let { title, getContent, ...meta } = postData
    if (i !== 0) {
      let previousPostDetails = postDetails[i - 1]
      previousPost = {
        title: "Congratulations on Your New Blog!", 
        tags: ["react", "navi"], 
        content: "Learn how to add new posts and tweak the theme to your liking.",
        readingTime : {text: "2 min read", minutes: 2, time: 113700, words: 379},
  
      }
      previousSlug = previousPostDetails.slug
    }

    if (i + 1 < postDetails.length) {
      let nextPostDetails = postDetails[i + 1]
      nextPost = {
        title: "Congratulations on Your New Blog!", 
        tags: ["react", "navi"], 
        content: "Learn how to add new posts and tweak the theme to your liking.",
        readingTime : {text: "2 min read", minutes: 2, time: 113700, words: 379},
  
      }
      nextSlug = nextPostDetails.slug
    }

    return Navi.route({
      title,
      getData: (req, context) => ({
        date,
        pathname,
        slug,
        previousDetails: previousPost && {
          title: previousPost.title,
          href: join(context.blogRoot, 'posts', previousSlug),
        },
        nextDetails: nextPost && {
          title: nextPost.title,
          href: join(context.blogRoot, 'posts', nextSlug),
        },
        ...meta,
      }),
      getView: async () => {
        return BlogPostContent
      },
    })
  }),
  slug,
}))

export default posts
