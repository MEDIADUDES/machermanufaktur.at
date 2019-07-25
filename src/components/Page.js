import React from 'react';
import PropTypes from 'prop-types';
import SEO from './SEO';
import Footer from './Footer';
import Header from './Header';

const Page = ({
	children,
	title,
	description,
	lang,
	meta,
	containerClass,
	hideHeader,
}) => {
	return (
		<React.Fragment>
			<SEO title={title} description={description} lang={lang} meta={meta} />

			{hideHeader ? '' : <Header />}

			<div className={`main-container ${containerClass}`}>
				<div className="main-grid">
					<main className="main-content">{children}</main>
				</div>
			</div>

			<Footer />
		</React.Fragment>
	);
};

export default Page;

Page.defaultProps = {
	lang: `de`,
	meta: [],
	description: ``,
	containerClass: '',
	hideHeader: false,
};

Page.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	containerClass: PropTypes.string,
	hideHeader: PropTypes.bool,
};
