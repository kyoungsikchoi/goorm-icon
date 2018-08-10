import React from 'react';
import PropTypes from 'prop-types';
import IconBase from 'react-icon-base';

function More(props) {
	return (
		<IconBase {...props} id="5b257b34-2153-4e23-b70b-70da1e2ae98e" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
			<circle cx="9" cy="2.25" r="2" fill="#fff" stroke="#ced0da" strokeMiterlimit="10" strokeWidth="0.5" />
			<circle cx="9" cy="9" r="2" fill="#fff" stroke="#ced0da" strokeMiterlimit="10" strokeWidth="0.5" />
			<circle cx="9" cy="15.75" r="2" fill="#fff" stroke="#ced0da" strokeMiterlimit="10" strokeWidth="0.5" />
		</IconBase>
	);
}

More.defaultProps = {
	size: '1rem',
	color: 'currentColor',
	onClick: () => {},
	style: {},
};

More.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.objectOf(PropTypes.string),
};

export default More;
