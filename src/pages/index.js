import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Page from '../components/Page';

const index = ({ data }) => {
	return (
		<Page
			title={data.site.siteMetadata.title}
			description={data.site.siteMetadata.description}
		/>
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
