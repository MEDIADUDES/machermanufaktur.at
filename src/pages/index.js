import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Page from '../components/Page';

import MAMALogo from '../assets/logo-wide.svg';

const index = ({ data }) => {
	return (
		<Page
			title={data.site.siteMetadata.title}
			description={data.site.siteMetadata.description}
			containerClass="main-container--full-width"
		>
			<div className="[ section  section--full section--splitted ] intro">
				<div className="cell">
					<div className="cell__inner">
						<img
							className="mama-logo"
							src={MAMALogo}
							alt="MACHERMANUFAKTUR Logo"
						/>
					</div>
				</div>
				<div className="cell dark">
					<div className="cell__inner">
						Mit unseren beiden Marken Heldenmacher und Mutmacher bieten wir
						Onlineumsetzung und -reichweite für unsere Kunden im B2B Bereich und
						gleichzeitig Mehrwert in der Persönlichkeitsentwicklung für jeden,
						der sich weiter entwickeln möchte.
						<br />
						<br />
						Mit einem Team aus Professionisten lösen wir auch Ihre
						Onlineherausforderungen und lassen auch Sie mutig, online zum Helden
						werden. Und wenn Sie Lust haben präsentieren wir auch Ihre
						Geschichte in einem Interview bei den Mutmachern.
						<br />
						<br />
						<div className="contact">
							<a
								className="contact__mail"
								href="mailto:office@machermanufaktur.at"
							>
								office@machermanufaktur.at
							</a>
							<a className="contact__phone" href="tel:004369919831028">
								+43 699 19831028
							</a>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default index;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;

index.propTypes = {
	data: PropTypes.object.isRequired,
};
