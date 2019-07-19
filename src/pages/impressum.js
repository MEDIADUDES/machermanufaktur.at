import React from 'react';
import Helmet from 'react-helmet';

import Page from '../components/Page';

const SiteNotice = () => {
	return (
		<Page title="Site Notice">
			<Helmet>
				<meta name="robots" content="noindex" />
			</Helmet>

			<h1>Impressum</h1>
		</Page>
	);
};

export default SiteNotice;
