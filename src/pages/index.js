import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Page from '../components/Page';

import MAMALogo from '../assets/logo-wide.svg';
import MMLogo from '../assets/mutmacher-logo.svg';
import HMLogo from '../assets/heldenmacher-logo.svg';

const index = ({ data }) => {
	return (
		<Page
			title={data.site.siteMetadata.title}
			description={data.site.siteMetadata.description}
			containerClass="main-container--full-width"
			hideHeader
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
								className="contact__item"
								href="mailto:office@machermanufaktur.at"
							>
								office@machermanufaktur.at
							</a>

							<a className="contact__item" href="tel:004369919831028">
								+43 699 19831028
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="[ section  section--full section--splitted ] brands">
				<div className="cell dark">
					<div className="brand">
						<div className="brand__inner">
							<h2 className="brand__heading">
								<img
									className="brand__heading-logo"
									src={HMLogo}
									alt="Heldenmacher Logo"
								/>
							</h2>

							<p className="brand__content">
								Die Heldenmacher sind deine Experten für Online-Marketing. Wir
								steigern deine Bekanntheit und etablieren dich im Internet als
								Marke auf deinem Fachgebiet. Mit authentischen Inhalten, die
								Menschen emotional begeistern und an dich binden. Dein messbarer
								und nachhaltiger Erfolg ist unser größtes Ziel. Dabei bedienen
								wir dich neben klassischer Agenturarbeit mit modernsten Lösungen
								wie Chatbots, Werbeanzeigen ohne Streuverlust und jede Menge
								Automatismus für dein Geschäft
								<div className="contact">
									<a
										className="contact__item"
										href="https://www.heldenmacher.at"
									>
										Heldenmacher besuchen
									</a>
								</div>
							</p>
						</div>
					</div>
				</div>

				<div className="cell">
					<div className="brand">
						<div className="brand__inner">
							<h2 className="brand__heading">
								<img
									className="brand__heading-logo"
									src={MMLogo}
									alt="Mutmacher Logo"
								/>
							</h2>

							<p className="brand__content">
								Die Mutmacher stellen dir Impulse, Tipps und Erfahrungsberichte
								kostenlos zur Verfügung. Profitiere von Menschen, die
								Situationen wie die deine schon erfolgreich gemeistert haben und
								hole dir alles heraus was du benötigst um selbst mutiger zu
								werden und (noch) bessere Entscheidungen treffen zu können.
								<div className="contact">
									<a className="contact__item" href="https://www.mutmacher.at">
										Mutmacher besuchen
									</a>
								</div>
							</p>
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
