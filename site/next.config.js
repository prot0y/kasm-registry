/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'STAR astro Workspaces',
    description: 'Personal source for Kasm supported workspaces.',
    icon: 'https://prot0y.github.io/kasm-registry/1.0/moonlight.png',
    listUrl: 'https://prot0y.github.io/kasm-registry/',
    contactUrl: 'https://github.com/prot0y/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
