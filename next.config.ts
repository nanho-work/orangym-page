const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: isProd ? '/orangym-page/' : '',
  basePath: isProd ? '/orangym-page' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;