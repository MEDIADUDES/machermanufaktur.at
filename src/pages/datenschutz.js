import React from 'react';
import Helmet from 'react-helmet';

import Page from '../components/Page';

const analyticsOptOut = e => {
	if ((e.type === 'keypress' && e.which === 13) || e.type === 'click') {
		// eslint-disable-next-line no-undef
		gaOptout();
		// eslint-disable-next-line no-alert
		alert('Google Analytics erfolgreich deaktiviert.');
	}
};

const PrivacyPolicy = () => {
	return (
		<Page title="Privacy Policy">
			<Helmet>
				<meta name="robots" content="noindex" />
			</Helmet>

			<h1>Datenschutzerklärung</h1>
		</Page>
	);
};

export default PrivacyPolicy;
