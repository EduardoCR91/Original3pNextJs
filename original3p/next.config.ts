/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // 👇 Esto hace que los assets se carguen desde rutas relativas (./)
  basePath: '',
  assetPrefix: './',
};

export default nextConfig;