/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function({actions, graphql}) {
    const pluginOptions = {
        wordPressUrl: `https://gqltst.wpengine.com/`,
        uploadsUrl: `https://gqltst.wpengine.com/wp-content/uploads/`,
    }
    const {
        data: {
            wpcontent: {
                pages: {
                    pageNodes
                },
                posts: {
                    postNodes
                }
            }
        }
    } = await graphql(
        `query {
          wpcontent {
            pages(first: 20) {
              pageNodes: nodes {
                id
                uri
                template {
                    __typename
                  }
              }  
            }
            posts {
              postNodes: nodes {
                id
                uri
              }
            }
          }
        }`
    )
    pageNodes.forEach(node => {
        const uri = node.uri;
        if (uri === '/') return;
        switch(node.template.__typename){
            case 'WPGraphQL_CustomTemplateTemplate':
                actions.createPage({
                    path: uri,
                    component: require.resolve(`./src/templates/pages`),
                    context: {...node, pluginOptions}
                })
                break;
            case 'WPGraphQL_NoSidebarTemplate':
                actions.createPage({
                    path: uri,
                    component: require.resolve(`./src/templates/pagesNoSideBar`),
                    context: {...node, pluginOptions}
                })
                break;
            default:
                actions.createPage({
                    path: uri,
                    component: require.resolve(`./src/templates/pages`),
                    context: {...node, pluginOptions}
                })
        }

    })
    postNodes.forEach(node => {
        const uri = node.uri;
        actions.createPage({
            path: uri,
            component: require.resolve(`./src/templates/posts`),
            context: {...node, pluginOptions}
        })
    })
}
