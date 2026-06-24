import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Permite acessar o dev server pelo IP da rede local (ex.: 192.168.x.x:3000).
  // Sem isso, o Next.js 16 bloqueia os chunks /_next/* e o JS não carrega.
  allowedDevOrigins: [
    '192.168.*.*',
    '10.*.*.*',
    '172.*.*.*',
  ],
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
