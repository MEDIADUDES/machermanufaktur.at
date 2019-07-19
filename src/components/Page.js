import React from 'react';
import PropTypes from 'prop-types';
import SEO from './SEO';

const Page = ({ children, title, description, lang, meta, containerClass }) => {
	return (
		<React.Fragment>
			<SEO title={title} description={description} lang={lang} meta={meta} />

			<div className={`main-container ${containerClass}`}>
				<div className="main-grid">
					<main className="main-content">{children}</main>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Page;

Page.defaultProps = {
	lang: `de`,
	meta: [],
	description: ``,
	containerClass: '',
};

Page.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	containerClass: PropTypes.string,
};
