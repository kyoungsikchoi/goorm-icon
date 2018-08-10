import React from 'react';
import PropTypes from 'prop-types';
import IconBase from 'react-icon-base';

function More(props) {
	return (
		<IconBase {...props} id="abae7265-d86f-4afc-bc36-ad71c61cb971" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
			<path d="M9,4.25a2,2,0,1,1,2-2A2,2,0,0,1,9,4.25ZM11,9a2,2,0,1,0-2,2A2,2,0,0,0,11,9Zm0,6.75a2,2,0,1,0-2,2A2,2,0,0,0,11,15.75Z" fill="#90929e" />
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
