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
			<p>
				Offenlegung gemäß § 25 Mediengesetz und § 5 E-Commerce Gesetz:
				<br />
				Heldenmacher
				<br />
				Dominic Pfeffer
				<br />
				Anschrift:
				<br />
				Porzelangasse 3, 1090 Wien
				<br />
				Tel: <a href="tel:+4369919831028">+43 699 198 310 28</a>
				<br />
				E-Mail:{' '}
				<a
					href="mailto:office@machermanufaktur.at
"
				>
					office@machermanufaktur.at
				</a>
				<br />
				Web: www.machermanufaktur.at
			</p>
			<p>
				Unternehmensgegenstand:
				<br />
				Werbeagentur
			</p>
			<p>
				Rechtsform:
				<br />
				Einzelunternehmen
			</p>
			<p>
				UID-Nummer:
				<br />
				ATU63599207
			</p>
			<p>
				Kammerzugehörigkeit:
				<br />
				Mitglied der WKÖ, WKOÖ, Fachverband Werbung und Marktkommunikation
			</p>
		</Page>
	);
};

export default SiteNotice;
