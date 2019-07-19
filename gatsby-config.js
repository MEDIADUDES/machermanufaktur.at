const config = {
	siteMetadata: {
		title: `MACHERMANUFAKTUR`,
		author: `MACHERMANUFAKTUR`,
		description: `Mit den beiden Marken Heldenmacher und Mutmacher bieten wir Onlineumsetzung und -reichweite für unsere Kunden im B2B Bereich und gleichzeitig Mehrwert in der Persönlichkeitsentwicklung für jeden, der sich weiter entwickeln möchte.`,
		siteUrl: `https://www.machermanufaktur.at/`,
		social: {
			facebook: '',
		},
	},
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.js$|\.jsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ['develop', 'build-javascript'],
				options: {
					emitWarning: true,
					failOnError: true,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-stylelint',
			options: {
				files: ['**/*.{scss,sass,css}'],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/assets`,
				name: `assets`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `MACHERMANUFAKTUR`,
				short_name: `MACHERMANUFAKTUR`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#122337`,
				display: `minimal-ui`,
				icon: `src/assets/logo-icon.svg`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
	],
};

// only add analytics if site is published with netlify.
if (process.env.CONTEXT === 'production') {
	const googleAnalyticsCfg = {
		resolve: `gatsby-plugin-google-analytics`,
		options: {
			trackingId: 'UA-XXXXXXX-X',
			// Defines where to place the tracking script - `true` in the head and `false` in the body
			head: true,
			anonymize: true,
			respectDNT: true,
		},
	};

	config.plugins.push(googleAnalyticsCfg);
}

module.exports = config;
