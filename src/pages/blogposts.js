import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const Blogposts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBook {
        edges {
          node {
            slug
            tagline
            title
            cover {
              fluid(quality: 80, maxWidth: 690) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ul>
        {data.allContentfulBook.edges.map(edge => {
          return (
            <Link to={`/${edge.node.slug}`}>
              <li>
                {edge.node.title}
                <Img fluid={edge.node.cover.fluid} />
              </li>
            </Link>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blogposts
