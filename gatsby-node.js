const path = require("path")
const data = require("./books")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const page = path.resolve("./src/templates/Book.js")
  const res = await graphql(`
    query {
      allContentfulBook {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulBook.edges.forEach(edge => {
    const path = edge.node.slug
    createPage({
      path: edge.node.slug,
      component: page,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
