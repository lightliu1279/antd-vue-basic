export default {
  hostname: process.env.MIX_HOSTNAME || 'http://127.0.0.1:8000',
  graphqlUrl: process.env.MIX_GRAPHQL_URL || 'http://127.0.0.1:8000',
  productUrl: process.env.MIX_PRODUCT_URL || 'http://127.0.0.1:8000/#/product/',
  apiBaseUrl: 'https://randomuser.me/api' // temporarily url
};
