
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Como há um CNAME (arirambachatbots.com.br), o site é servido na raiz do domínio.
  // Não precisamos de basePath ou assetPrefix.
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
