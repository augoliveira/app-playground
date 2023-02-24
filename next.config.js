/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
<<<<<<< HEAD
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
=======
    nextScriptWorkers: true,
    urlImports: ['https://code.jquery.com/jquery-3.3.1.js', 'https://cdn.skypack.dev'],
    // Required:
>>>>>>> 43e66e21525f83e5a8ac168def6981d56fc8ab20
    appDir: true,
    typedRoutes: true,
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  transpilePackages: ['@acme/ui', 'lodash-es'],
};

module.exports = nextConfig;