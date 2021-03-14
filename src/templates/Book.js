import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulBook(slug: { eq: $slug }) {
      slug
      tagline
      title
      paragraph {
        paragraph
      }
    }
  }
`

const Book = props => {
  return (
    <div>
      Hello <h1>{console.log(props.data)}</h1>
      <p>{props.data.contentfulBook.title}</p>
      <p>{props.data.contentfulBook.slug}</p>
      <p>{props.data.contentfulBook.paragraph.paragraph}</p>
    </div>
  )
}
export default Book
