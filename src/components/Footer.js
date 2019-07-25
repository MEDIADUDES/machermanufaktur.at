import React from 'react';
import { Link } from 'gatsby';

import './Footer.scss';

const Footer = () => {
	return (
		<footer className="[ section  section--splitted ] Footer">
			<div className="cell">
				<Link to="/impressum/">Impressum</Link>
			</div>
			<div className="cell dark">
				<Link to="/datenschutz/">Datenschutzerklärung</Link>
			</div>
		</footer>
	);
};

export default Footer;
