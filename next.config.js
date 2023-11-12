/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/nextjs_test' : '',
    output: 'export',
    distDir: 'dist',
}

module.exports = nextConfig
