const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		disableStaticImages: false,
		loader: 'imgix',
		path: '',
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: '@svgr/webpack',
		})
		return config
	},
	eslint: {
		dirs: ['pages', 'app'],
	},
}

module.exports = nextConfig
