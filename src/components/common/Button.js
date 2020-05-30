import React, { Fragment } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

const Button = ({ children, style, className, primary, facebook,onClick }) => {
	return (
		<Fragment>
			{primary && (
				<button style={style} onClick={onClick} className={`button button-primary ${className ? className : ''}`}>
					{children}
				</button>
			)}
			{facebook && (
				<button style={style} onClick={onClick} className={`button facebook-button ${className ? className : ''}`}>
					<FaFacebookSquare style={{ paddingRight: 8 }} size="2em"/> {children}
				</button>
			)}
		</Fragment>
	);
};

export default Button;
