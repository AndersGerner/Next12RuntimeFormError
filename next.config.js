

const { withSuperjson } = require('next-superjson')

module.exports = withSuperjson()({
    swcMinify: false,
    reactStrictMode: false,
    concurrentFeatures: false,
    
});
