import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Se for fazer deploy para <username>.github.io/<repository-name>/
  // Descomente as linhas abaixo e substitua pelo nome do seu repositório:
  // basePath: isGithubActions ? '/arirambachatbots' : '',
  // assetPrefix: isGithubActions ? '/arirambachatbots/' : '',
};

export default nextConfig;
