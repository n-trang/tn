import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Center from '../../components/center';


const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="trang | blog">
      <Center><h2>Some writing / translation 🎺</h2></Center>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <p>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage