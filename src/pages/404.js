import React from 'react';

import Page from '../components/Page';

const NotFoundPage = () => {
	return (
		<Page title="404: Nicht gefunden">
			<h1>Nicht gefunden</h1>
			<p>Du hast gerade eine Seite aufgerufen, die leider nicht existiert.</p>
		</Page>
	);
};

export default NotFoundPage;
