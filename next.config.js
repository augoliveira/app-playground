/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true,
    urlImports: ['https://code.jquery.com/jquery-3.3.1.js', 'https://cdn.skypack.dev'],
    // Required:
    appDir: true,
  },
  transpilePackages: ['@acme/ui', 'lodash-es'],
};

module.exports = nextConfig;