const path = require('path');
// const styles = require('sass/s')
// import path from 'path';

module.exports = {
	sassOptions: {
		// includePaths: [path.join('components/ThumbnailWithSass/styles.scss', 'styles')],
		// includePaths: 'components/ThumbnailWithSass/styles.scss'
		includePaths: [path.join(
			__dirname,
			'styles'
		)],
	},

	async redirects() {
		return [
			{
				source: '/',
				destination: '/us',
				permanent: true
			}
		]
	}
	
}

