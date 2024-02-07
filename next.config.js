const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: false,
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
    siteDomain: process.env.SITE_DOMAIN,
    apiServer: process.env.API_SERVER,
    instagramUrl: process.env.SOCIAL_INSTAGRAM_URL,
    facebookUrl: process.env.SOCIAL_FACEBOOK_URL,
    twitterUrl: process.env.SOCIAL_TWITTER_URL,
  },
  // future: {
  //   webpack5: true,
  // },
  images: {
    domains: ['placehold.co'],
    unoptimized: true,
  },
});
