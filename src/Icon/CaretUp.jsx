import React from 'react';
import PropTypes from 'prop-types';
import IconBase from 'react-icon-base';

function CaretUp(props) {
	return (
		<IconBase viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g>
				<path d="M4.6667,9.3333,8,6l3.3333,3.3333Z" />
				<path style={{ fill: 'none' }} d="M0,0H16V16H0Z" />
			</g>
		</IconBase>
	);
}

CaretUp.defaultProps = {
	size: '1rem',
	color: 'currentColor',
	onClick: () => {},
	style: {},
};

CaretUp.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.objectOf(PropTypes.string),
};

export default CaretUp;
