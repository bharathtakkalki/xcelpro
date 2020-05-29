import React, { Fragment } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

const Button = ({ children, style, className, primary, facebook }) => {
	return (
		<Fragment>
			{primary && (
				<button style={style} className={`button button-primary ${className ? className : ''}`}>
					{children}
				</button>
			)}
			{facebook && (
				<button style={style} className={`button facebook-button ${className ? className : ''}`}>
					<FaFacebookSquare style={{ paddingRight: 8 }} /> {children}
				</button>
			)}
		</Fragment>
	);
};

export default Button;
