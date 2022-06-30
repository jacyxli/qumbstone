const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allPaddyJoyJson(sort: { order: DESC, fields: answer_created_at }) {
          edges {
            node {
              id
              answer_body
              answer_created_at
              answer_id
              answer_likes_count
              body
              fields {
                slug
              }
              uuid_hash
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // singular post
  const posts = result.data.allPaddyJoyJson.edges;
  posts.forEach((post, i) => {
    createPage({
      path: `/question/${post.node.uuid_hash}`,
      component: path.resolve("./src/templates/question-template.js"),
      context: {
        uuid_hash: post.node.uuid_hash,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `PaddyJoyJson`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
