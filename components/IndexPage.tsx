import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

import styles from './Home.module.css'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
     <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <p className={styles.intro}>
              hiya! i am &rarr;
            </p>
            <h1 className={styles.heading}>
              mercedes walsh
            </h1>
            <h2 className={styles.subheading}>
              a curious, creative gal that runs off of Dr. Pepper + chaos***
            </h2>
          </div>
          <div className="w-full md:w-1/2 p-4">
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <h2 className={styles.intro}>
              check out my &rarr;
            </h2>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className={styles.intro}>
              what i am doing &rarr;
            </h2>
          </div>
        </div>

          <BlogHeader title={title} description={description} level={1} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
