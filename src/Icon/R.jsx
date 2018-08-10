import React from 'react';
import PropTypes from 'prop-types';
import IconBase from 'react-icon-base';

function R(props) {
	return (
		<IconBase viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g id="학생-페이지" fill="none" fillRule="evenodd">
				<g id="icon_lang_r" transform="translate(-2 -4)">
					<rect id="Rectangle-7-Copy-9" fill="#467DC6" opacity="0" width="24" height="24" />
					<path
						d="M13.6508658,15.011134 L14.5668353,15.011134 C14.7541988,15.011134 14.8349853,15.0656806 15.0245055,15.219076 C15.1331494,15.3071414 15.274054,15.4980095 15.391774,15.6734213 C14.8393886,15.7375832 14.2566296,15.7703831 13.6509557,15.7742472 L13.6508658,15.011134 Z M15.7456529,12.5150205 L13.6792624,12.5155597 L13.6803408,10.6004978 L15.7456529,10.6018458 C15.7456529,10.6018458 16.7025099,10.5499052 16.7025099,11.5407302 C16.7025099,12.5119652 15.7456529,12.5150205 15.7456529,12.5150205 Z M5.92978136,11.1970058 C5.92978136,8.66836207 9.33278817,6.61841644 13.5307195,6.61841644 C17.7284712,6.61841644 20.8264843,8.02090204 20.8264843,11.1970058 C20.8264843,12.9223677 19.9115033,14.122932 18.4042379,14.8608837 C18.3221934,14.8065168 18.2441926,14.7629335 18.186411,14.7337281 C17.8347786,14.55589 17.2294641,14.3731095 17.2294641,14.3731095 C17.2294641,14.3731095 20.2111052,14.1521374 20.2111052,11.1835264 C20.2111052,8.21491539 17.0908062,8.15866141 17.0908062,8.15866141 L10.2401308,8.15866141 L10.2401308,15.3252936 C7.69000997,14.5864433 5.92978136,13.0155552 5.92978136,11.1970058 Z M22,10.6973697 C22,6.99853524 17.5228655,4 12,4 C6.47713446,4 2,6.99853524 2,10.6973697 C2,13.9940691 5.55658199,16.7342493 10.2401308,17.2911279 L10.2401308,19.4217701 L13.6515847,19.4203323 L13.6512253,17.3032593 C14.487217,17.2101617 15.2880725,17.0477799 16.0403124,16.8251004 L17.4235674,19.4228485 L21.2789425,19.4210512 L18.9576118,15.5072654 C20.8335835,14.2898967 22,12.5849336 22,10.6973697 Z"
						id="Fill-1"
						fill="#494E5F"
					/>
				</g>
			</g>
		</IconBase>
	);
}

R.defaultProps = {
	size: '1rem',
	color: 'currentColor',
	onClick: () => {},
	style: {}
};

R.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.objectOf(PropTypes.string)
};

export default R;