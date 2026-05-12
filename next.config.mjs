/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/arirambachatbots' : '',
  assetPrefix: isGithubActions ? '/arirambachatbots/' : '',
};

export default nextConfig;
