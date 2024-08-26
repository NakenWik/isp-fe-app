/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['www.shutterstock.com']
    }
    ,
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:8888/api/:path*`,
			},
		]
	},
};

export default nextConfig;
