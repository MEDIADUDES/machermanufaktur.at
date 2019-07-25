import React from 'react';
import { Link } from 'gatsby';

import MAMALogo from '../assets/logo-wide.svg';
import './Header.scss';

const Header = () => {
	return (
		<header className="section Header">
			<Link className="Header__logo-link" to="/">
				<img
					className="Header__logo"
					src={MAMALogo}
					alt="MACHERMANUFAKTUR Logo"
				/>
			</Link>
		</header>
	);
};

export default Header;
