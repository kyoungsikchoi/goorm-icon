import React from 'react';
import PropTypes from 'prop-types';
import IconBase from 'react-icon-base';

function C(props) {
	return (
		<IconBase viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg" {...props}>
			<defs>
				<path
					d="M12.0982374,3.40756739 C11.1691244,3.97415563 10.2525331,4.53152033 9.32091566,5.09942622 C8.68731566,4.06639092 7.79952436,3.45763798 6.62874175,3.39834386 C5.68460262,3.35090857 4.86568088,3.70140269 4.19201132,4.41161445 C2.82213305,5.85575563 2.90102001,8.10366151 4.41114175,9.4753321 C5.75096784,10.6915203 8.01239392,10.6506733 9.3334374,8.5766968 C10.2462722,9.13406151 11.1616113,9.69142622 12.0756983,10.2474733 C11.0589331,12.3570262 8.53830697,13.8841792 5.98512436,13.6430497 C2.5128461,13.313638 0.316533055,10.491238 0.0360460982,7.58187327 C-0.317066945,3.90432033 1.96940262,0.985732097 4.91075914,0.204367392 C7.79326349,-0.56118555 10.7646722,0.893496803 12.0982374,3.40756739"
					id="path-1"
				/>
			</defs>
			<g id="학생-페이지" fill="none" fillRule="evenodd">
				<g id="icon_lang_c" transform="translate(-6 -5)">
					<rect id="Rectangle-7-Copy-4" fill="#467DC6" opacity="0" width="24" height="24" />
					<g id="Group-9" transform="translate(6 5)">
						<mask id="mask-2" fill="#fff">
							<use xlinkHref="#path-1" />
						</mask>
						<use id="Combined-Shape" fill="#494E5F" xlinkHref="#path-1" />
					</g>
				</g>
			</g>
		</IconBase>
	);
}

C.defaultProps = {
	size: '1rem',
	color: 'currentColor',
	onClick: () => {},
	style: {}
};

C.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.objectOf(PropTypes.string)
};

export default C;