import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // ✅ habilita la exportación estática
  images: { unoptimized: true },
};

export default nextConfig;